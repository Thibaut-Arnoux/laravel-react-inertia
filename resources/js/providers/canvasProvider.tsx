import { IDrawable } from '@/classes/IDrawable';
import { useCanvasActions } from '@/hooks/useCanvasStore';
import {
    MutableRefObject,
    PropsWithChildren,
    createContext,
    useRef,
} from 'react';

type CanvasContextProps = {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
    drawStack: MutableRefObject<IDrawable[]>;
    redraw: () => void;
    initCanvasOptions: () => void;
    setCanvasLineWidth: (width: number) => void;
};

export const CanvasContext = createContext<CanvasContextProps | null>(null);

export const CanvasProvider = ({ children }: PropsWithChildren) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const drawStack = useRef<IDrawable[]>([]);
    const { setLineWidth } = useCanvasActions();

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

    const initCanvasOptions = () => {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx || !canvasRef.current) return;

        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;

        ctx.lineWidth = 2;
        ctx.save();
    };

    const setCanvasLineWidth = (width: number) => {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) return;

        ctx.lineWidth = width;
        setLineWidth(width);
    };

    const initialValue: CanvasContextProps = {
        canvasRef,
        drawStack,
        redraw,
        initCanvasOptions,
        setCanvasLineWidth,
    };

    return (
        <CanvasContext.Provider value={initialValue}>
            {children}
        </CanvasContext.Provider>
    );
};
