import { ShapeMode } from '@/types/shape';
import { create } from 'zustand';

type CanvasState = {
    isDrawing: boolean;
    shapeMode: ShapeMode | null;
};

type CanvasActions = {
    actions: {
        setIsDrawing: (isDrawing: boolean) => void;
        setShapeMode: (shapeMode: ShapeMode | null) => void;
        resetCanvasState: () => void;
    };
};

const initialState: CanvasState = {
    isDrawing: false,
    shapeMode: null,
};

export const canvasStore = create<CanvasState & CanvasActions>((set) => ({
    ...initialState,
    actions: {
        setIsDrawing: (isDrawing) => set({ isDrawing }),
        setShapeMode: (shapeMode) => set({ shapeMode }),
        resetCanvasState: () => set(initialState),
    },
}));
