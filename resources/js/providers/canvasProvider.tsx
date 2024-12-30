import { IDrawable } from '@/classes/IDrawable';
import { useCanvasActions } from '@/hooks/useCanvasStore';
import { canvasStore } from '@/stores/canvasStore';
import { CanvasSettings } from '@/types/canvas';
import {
    MutableRefObject,
    PropsWithChildren,
    createContext,
    useRef,
} from 'react';
import { useWindowSize } from 'usehooks-ts';

type CanvasContextProps = {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
    drawStack: MutableRefObject<
        { drawable: IDrawable; settings: CanvasSettings }[]
    >;
    initCanvasSettings: () => void;
    syncCanvasSettings: (settings: CanvasSettings) => void;
    redraw: () => void;
};

export const CanvasContext = createContext<CanvasContextProps | null>(null);

export const CanvasProvider = ({ children }: PropsWithChildren) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const drawStack = useRef<
        { drawable: IDrawable; settings: CanvasSettings }[]
    >([]);

    const { setCanvasSettings } = useCanvasActions();
    const { width = 0, height = 0 } = useWindowSize();

    /**
     * Applies the given `CanvasSettings` to the 2D context.
     */
    const _setCanvasSettings = (settings: CanvasSettings) => {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) return;

        ctx.lineWidth = settings.lineWidth;
        ctx.strokeStyle = settings.strokeStyle;
    };

    const initCanvasSettings = () => {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx || !canvasRef.current) return;

        canvasRef.current.width = width;
        canvasRef.current.height = height - 65;
        _setCanvasSettings(canvasStore.getState().canvasSettings);

        ctx.save();
    };

    const syncCanvasSettings = (settings: CanvasSettings) => {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) return;

        _setCanvasSettings(settings);
        setCanvasSettings(settings);
    };

    const redraw = () => {
        const ctx = canvasRef.current?.getContext('2d');
        const canvasWidth = canvasRef.current?.width;
        const canvasHeight = canvasRef.current?.height;

        if (!ctx || !canvasWidth || !canvasHeight) return;

        // Clear the canvas
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Redraw all drawables
        drawStack.current.forEach((stackElement) => {
            ctx.save();
            _setCanvasSettings(stackElement.settings);
            stackElement.drawable.draw(ctx);
            ctx.restore();
        });
    };

    const initialValue: CanvasContextProps = {
        canvasRef,
        drawStack,
        initCanvasSettings,
        syncCanvasSettings,
        redraw,
    };

    return (
        <CanvasContext.Provider value={initialValue}>
            {children}
        </CanvasContext.Provider>
    );
};
