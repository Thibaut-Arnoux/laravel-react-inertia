import { ThemeEnum } from '@/enums/theme';
import { CanvasDefaultSettings, CanvasSettings } from '@/types/canvas';
import { DrawMode } from '@/types/draw';
import { create } from 'zustand';
import { themeStore } from './themeStore';

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

// use fonction instead of object to bind theme
const initialState = (): CanvasState => ({
    isDrawing: false,
    drawMode: null,
    canvasSettings: {
        lineWidth: CanvasDefaultSettings.LINE_WIDTH,
        strokeStyle:
            themeStore.getState().theme === ThemeEnum.LIGHT
                ? CanvasDefaultSettings.STROKE_DARK
                : CanvasDefaultSettings.STROKE_LIGHT,
    },
});

export const canvasStore = create<CanvasState & CanvasActions>((set) => ({
    ...initialState(),
    actions: {
        setIsDrawing: (isDrawing) => set({ isDrawing }),
        setDrawMode: (drawMode) => set({ drawMode }),
        setCanvasSettings: (canvasSettings) => set({ canvasSettings }),
        resetCanvasState: () => set(initialState()),
    },
}));
