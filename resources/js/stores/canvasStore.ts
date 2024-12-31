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
        resetCanvasSettings: () => void;
        resetCanvasState: () => void;
    };
};

// use fonction instead of object to bind theme
const initialCanvasSettings = (): CanvasSettings => ({
    lineWidth: CanvasDefaultSettings.LINE_WIDTH,
    strokeStyle:
        themeStore.getState().theme === ThemeEnum.LIGHT
            ? CanvasDefaultSettings.STROKE_DARK
            : CanvasDefaultSettings.STROKE_LIGHT,
});

const initialState = (): CanvasState => ({
    isDrawing: false,
    drawMode: null,
    canvasSettings: initialCanvasSettings(),
});

export const canvasStore = create<CanvasState & CanvasActions>((set) => ({
    ...initialState(),
    actions: {
        setIsDrawing: (isDrawing) => set({ isDrawing }),
        setDrawMode: (drawMode) => set({ drawMode }),
        setCanvasSettings: (canvasSettings) => set({ canvasSettings }),
        resetCanvasSettings: () =>
            set({ canvasSettings: initialCanvasSettings() }),
        resetCanvasState: () => set(initialState()),
    },
}));
