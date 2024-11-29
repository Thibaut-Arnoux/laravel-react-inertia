import { DrawMode } from '@/types/draw';
import { create } from 'zustand';

type CanvasState = {
    isDrawing: boolean;
    drawMode: DrawMode | null;
    lineWidth: number;
};

type CanvasActions = {
    actions: {
        setIsDrawing: (isDrawing: boolean) => void;
        setDrawMode: (drawMode: DrawMode | null) => void;
        setLineWidth: (lineWidth: number) => void;
        resetCanvasState: () => void;
    };
};

const initialState: CanvasState = {
    isDrawing: false,
    drawMode: null,
    lineWidth: 2,
};

export const canvasStore = create<CanvasState & CanvasActions>((set) => ({
    ...initialState,
    actions: {
        setIsDrawing: (isDrawing) => set({ isDrawing }),
        setDrawMode: (drawMode) => set({ drawMode }),
        setLineWidth: (lineWidth) => set({ lineWidth }),
        resetCanvasState: () => set(initialState),
    },
}));
