import { IDrawable } from '@/classes/IDrawable';
import {
    Dispatch,
    MutableRefObject,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useRef,
    useState,
} from 'react';

type CanvasContextProps = {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
    drawStack: MutableRefObject<IDrawable[]>;
    redraw: () => void;
    isDrawing: boolean;
    setIsDrawing: Dispatch<SetStateAction<boolean>>;
    mouseLeftClick: MouseEvent | null;
    setMouseLeftClick: Dispatch<SetStateAction<MouseEvent | null>>;
    mouseMove: MouseEvent | null;
    setMouseMove: Dispatch<SetStateAction<MouseEvent | null>>;
};

const CanvasContext = createContext<CanvasContextProps | null>(null);

export const CanvasProvider = ({ children }: PropsWithChildren) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const drawStack = useRef<IDrawable[]>([]);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const [mouseLeftClick, setMouseLeftClick] = useState<MouseEvent | null>(
        null,
    );
    const [mouseMove, setMouseMove] = useState<MouseEvent | null>(null);

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

    const initialValue = {
        canvasRef,
        drawStack,
        redraw,
        isDrawing,
        setIsDrawing,
        mouseLeftClick,
        setMouseLeftClick,
        mouseMove,
        setMouseMove,
    };

    return (
        <CanvasContext.Provider value={initialValue}>
            {children}
        </CanvasContext.Provider>
    );
};

export const useCanvas = () => {
    const context = useContext(CanvasContext);
    if (context === null) {
        throw new Error('useCanvas must be used within a CanvasProvider');
    }

    return context;
};
