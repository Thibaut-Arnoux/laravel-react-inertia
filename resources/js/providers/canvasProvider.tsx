import { Drawable } from '@/classes/Drawable';
import { ShapeMode } from '@/types/shape';
import {
    Dispatch,
    MutableRefObject,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useRef,
    useState,
} from 'react';

type CanvasContextProps = {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
    drawStack: MutableRefObject<Drawable[]>;
    redraw: () => void;
    isDrawing: boolean;
    setIsDrawing: Dispatch<SetStateAction<boolean>>;
    shapeMode: ShapeMode | null;
    setShapeMode: Dispatch<SetStateAction<ShapeMode | null>>;
};

export const CanvasContext = createContext<CanvasContextProps | null>(null);

export const CanvasProvider = ({ children }: PropsWithChildren) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const drawStack = useRef<Drawable[]>([]);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const [shapeMode, setShapeMode] = useState<ShapeMode | null>(null);

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
        isDrawing,
        setIsDrawing,
        shapeMode,
        setShapeMode,
    };

    return (
        <CanvasContext.Provider value={initialValue}>
            {children}
        </CanvasContext.Provider>
    );
};
