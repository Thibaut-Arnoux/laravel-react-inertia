import { DrawMode } from '@/types/draw';
import { create } from 'zustand';

type CanvasState = {
    isDrawing: boolean;
    drawMode: DrawMode | null;
};

type CanvasActions = {
    actions: {
        setIsDrawing: (isDrawing: boolean) => void;
        setDrawMode: (drawMode: DrawMode | null) => void;
        resetCanvasState: () => void;
    };
};

const initialState: CanvasState = {
    isDrawing: false,
    drawMode: null,
};

export const canvasStore = create<CanvasState & CanvasActions>((set) => ({
    ...initialState,
    actions: {
        setIsDrawing: (isDrawing) => set({ isDrawing }),
        setDrawMode: (drawMode) => set({ drawMode }),
        resetCanvasState: () => set(initialState),
    },
}));
