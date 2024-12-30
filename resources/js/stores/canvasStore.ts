import { CanvasSettings } from '@/types/canvas';
import { DrawMode } from '@/types/draw';
import { create } from 'zustand';

type CanvasState = {
    isDrawing: boolean;
    drawMode: DrawMode | null;
    canvasSettings: CanvasSettings;
};

type CanvasActions = {
    actions: {
        setIsDrawing: (isDrawing: boolean) => void;
        setDrawMode: (drawMode: DrawMode | null) => void;
        setCanvasSettings: (canvasSettings: CanvasSettings) => void;
        resetCanvasState: () => void;
    };
};

const initialState: CanvasState = {
    isDrawing: false,
    drawMode: null,
    canvasSettings: { lineWidth: 2 },
};

export const canvasStore = create<CanvasState & CanvasActions>((set) => ({
    ...initialState,
    actions: {
        setIsDrawing: (isDrawing) => set({ isDrawing }),
        setDrawMode: (drawMode) => set({ drawMode }),
        setCanvasSettings: (canvasSettings) => set({ canvasSettings }),
        resetCanvasState: () => set(initialState),
    },
}));
