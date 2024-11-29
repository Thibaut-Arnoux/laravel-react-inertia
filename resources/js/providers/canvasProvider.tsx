import { IDrawable } from '@/classes/IDrawable';
import { CanvasOptions, useCanvasOptions } from '@/hooks/useCanvasOptions';
import {
    MutableRefObject,
    PropsWithChildren,
    createContext,
    useRef,
} from 'react';

type CanvasContextProps = {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
    drawStack: MutableRefObject<IDrawable[]>;
    canvasOptions: CanvasOptions;
    redraw: () => void;
};

export const CanvasContext = createContext<CanvasContextProps | null>(null);

export const CanvasProvider = ({ children }: PropsWithChildren) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const drawStack = useRef<IDrawable[]>([]);
    const canvasOptions = useCanvasOptions(canvasRef);

    const redraw = () => {
        const ctx = canvasRef.current?.getContext('2d');
        const canvasWidth = canvasRef.current?.width;
        const canvasHeight = canvasRef.current?.height;

        if (!ctx || !canvasWidth || !canvasHeight) return;

        // Clear the canvas
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Redraw all drawables
        drawStack.current.forEach((drawable) => {
            drawable.draw(ctx);
        });
    };

    const initialValue: CanvasContextProps = {
        canvasRef,
        drawStack,
        canvasOptions,
        redraw,
    };

    return (
        <CanvasContext.Provider value={initialValue}>
            {children}
        </CanvasContext.Provider>
    );
};
