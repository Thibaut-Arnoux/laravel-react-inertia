import { useCanvasActions } from '@/hooks/useCanvasStore';
import { useDrawStackActions } from '@/hooks/useDrawStackStore';
import { drawStackStore } from '@/stores/drawStackStore';
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
    initialization: () => void;
    setSettings: (settings: CanvasSettings) => void;
    reset: () => void;
    redraw: () => void;
    zoom: (scale: number) => void;
};

export const CanvasContext = createContext<CanvasContextProps | null>(null);

export const CanvasProvider = ({ children }: PropsWithChildren) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const { resetCanvasState } = useCanvasActions();
    const { resetDrawStackState } = useDrawStackActions();
    const { width = 0, height = 0 } = useWindowSize();

    const ctx = canvasRef.current?.getContext('2d');

    const initialization = () => {
        if (!canvasRef.current) return;

        canvasRef.current.width = width;
        canvasRef.current.height = height - 65;
    };

    /**
     * Applies the given `CanvasSettings` to the 2D context.
     */
    const setSettings = (settings: CanvasSettings) => {
        if (!ctx) return;

        applyCanvasSettings(ctx, settings);
    };

    const reset = () => {
        if (!ctx) return;

        // reset none store properties (matrix)
        ctx.setTransform(new DOMMatrix());

        // reset store, canvas 'ui' properties will be sync in synchronization layer
        resetCanvasState();
        // reset drawStacks, redraw will be called in synchronization layer
        resetDrawStackState();
    };

    const redraw = () => {
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

        // clear the canvas
        ctx.clearRect(
            canvasStart.x,
            canvasStart.y,
            Math.abs(canvasStart.x) + Math.abs(canvasDim.x),
            Math.abs(canvasStart.y) + Math.abs(canvasDim.y),
        );

        // redraw all drawables
        const drawStack = drawStackStore.getState().drawStack;
        drawStack.forEach((drawable) => {
            drawable.redraw(ctx);
        });
    };

    const zoom = (scale: number) => {
        if (!ctx) return;

        // matrix transform before redraw
        const transform = new DOMMatrix(ctx.getTransform().toString());
        transform.a = 1; // scale x
        transform.d = 1; // scale y
        transform.scaleSelf(scale);

        ctx.setTransform(transform);

        redraw();
    };

    const initialValue: CanvasContextProps = {
        canvasRef,
        initialization,
        reset,
        setSettings,
        redraw,
        zoom,
    };

    return (
        <CanvasContext.Provider value={initialValue}>
            {children}
        </CanvasContext.Provider>
    );
};
