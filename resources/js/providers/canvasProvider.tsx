import { IDrawable } from '@/classes/IDrawable';
import { useCanvasActions } from '@/hooks/useCanvasStore';
import { canvasStore } from '@/stores/canvasStore';
import { CanvasSettings } from '@/types/canvas';
import { applyCanvasSettings } from '@/utils/canvas';
import {
    MutableRefObject,
    PropsWithChildren,
    createContext,
    useRef,
} from 'react';
import { useWindowSize } from 'usehooks-ts';

type CanvasContextProps = {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
    drawStack: MutableRefObject<IDrawable[]>;
    drawStackTemp: MutableRefObject<IDrawable[]>;
    initCanvasSettings: () => void;
    resetCanvas: () => void;
    syncCanvasSettings: (settings: CanvasSettings) => void;
    syncResetDrawSettings: () => void;
    redraw: () => void;
    undo: () => void;
    redo: () => void;
};

export const CanvasContext = createContext<CanvasContextProps | null>(null);

export const CanvasProvider = ({ children }: PropsWithChildren) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const drawStack = useRef<IDrawable[]>([]);
    const drawStackTemp = useRef<IDrawable[]>([]);

    const { setCanvasSettings, resetCanvasState, resetDrawSettings } =
        useCanvasActions();
    const { width = 0, height = 0 } = useWindowSize();

    /**
     * Applies the given `CanvasSettings` to the 2D context.
     */
    const _setCanvasSettings = (settings: CanvasSettings) => {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) return;

        applyCanvasSettings(ctx, settings);
    };

    const _ctxCheckPoint = () => {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) return;

        ctx.restore(); // restore saved from previous reset checkpoint
        ctx.save(); // save for next reset
    };

    const initCanvasSettings = () => {
        if (!canvasRef.current) return;

        canvasRef.current.width = width;
        canvasRef.current.height = height - 65;

        _setCanvasSettings(canvasStore.getState().canvasSettings);
        _ctxCheckPoint(); // checkpoint after applying store setting to keep the one overrided
    };

    const syncCanvasSettings = (settings: CanvasSettings) => {
        setCanvasSettings(settings);
        _setCanvasSettings(settings);
    };

    const resetCanvas = () => {
        drawStack.current = [];
        drawStackTemp.current = [];

        resetCanvasState();
        _ctxCheckPoint();

        redraw();
    };

    const syncResetDrawSettings = () => {
        resetDrawSettings();
        _setCanvasSettings(canvasStore.getState().canvasSettings);
    };

    const redraw = () => {
        const ctx = canvasRef.current?.getContext('2d');
        const canvasWidth = canvasRef.current?.width;
        const canvasHeight = canvasRef.current?.height;

        if (!ctx || !canvasWidth || !canvasHeight) return;

        // reverse the matrix and map canvas coordinates to transformed space to clear all canvas
        const inverseTransform = ctx.getTransform().inverse();
        const canvasStart = new DOMPoint(0, 0).matrixTransform(
            inverseTransform,
        );
        const canvasDim = new DOMPoint(
            canvasWidth,
            canvasHeight,
        ).matrixTransform(inverseTransform);

        // Clear the canvas
        ctx.clearRect(
            canvasStart.x,
            canvasStart.y,
            Math.abs(canvasStart.x) + Math.abs(canvasDim.x),
            Math.abs(canvasStart.y) + Math.abs(canvasDim.y),
        );

        // Redraw all drawables
        drawStack.current.forEach((drawable) => {
            drawable.redraw(ctx);
        });
    };

    const undo = () => {
        const temp = drawStack.current?.pop();

        if (temp) drawStackTemp.current?.push(temp);

        redraw();
    };

    const redo = () => {
        const temp = drawStackTemp.current?.pop();

        if (temp) drawStack.current?.push(temp);

        redraw();
    };

    const initialValue: CanvasContextProps = {
        canvasRef,
        drawStack,
        drawStackTemp,
        initCanvasSettings,
        resetCanvas,
        syncCanvasSettings,
        syncResetDrawSettings,
        redraw,
        undo,
        redo,
    };

    return (
        <CanvasContext.Provider value={initialValue}>
            {children}
        </CanvasContext.Provider>
    );
};
