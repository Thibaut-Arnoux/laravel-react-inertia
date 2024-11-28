import { Drawable } from '@/classes/Drawable';
import {
    MutableRefObject,
    PropsWithChildren,
    createContext,
    useRef,
} from 'react';

type CanvasContextProps = {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
    drawStack: MutableRefObject<Drawable[]>;
    redraw: () => void;
};

export const CanvasContext = createContext<CanvasContextProps | null>(null);

export const CanvasProvider = ({ children }: PropsWithChildren) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const drawStack = useRef<Drawable[]>([]);

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
        redraw,
    };

    return (
        <CanvasContext.Provider value={initialValue}>
            {children}
        </CanvasContext.Provider>
    );
};
