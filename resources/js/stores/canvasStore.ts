import { ShapeMode, ShapeModeEnum } from '@/enums/shape';
import { ThemeEnum } from '@/enums/theme';
import { CanvasDefaultSettings, CanvasSettings } from '@/types/canvas';
import { DrawMode } from '@/types/draw';
import { create } from 'zustand';
import { themeStore } from './themeStore';

type CanvasState = {
    isDrawing: boolean;
    drawMode: DrawMode | null;
    shapeMode: ShapeMode;
    canvasSettings: CanvasSettings;
};

type CanvasActions = {
    actions: {
        setIsDrawing: (isDrawing: boolean) => void;
        setDrawMode: (drawMode: DrawMode | null) => void;
        setShapeMode: (shapeMode: ShapeMode) => void;
        toogleShapeMode: () => void;
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
            ? CanvasDefaultSettings.COLOR_DARK
            : CanvasDefaultSettings.COLOR_LIGHT,
    fillStyle:
        themeStore.getState().theme === ThemeEnum.LIGHT
            ? CanvasDefaultSettings.COLOR_DARK
            : CanvasDefaultSettings.COLOR_LIGHT,
});

const initialState = (): CanvasState => ({
    isDrawing: false,
    drawMode: null,
    shapeMode: ShapeModeEnum.STROKE,
    canvasSettings: initialCanvasSettings(),
});

export const canvasStore = create<CanvasState & CanvasActions>((set) => ({
    ...initialState(),
    actions: {
        setIsDrawing: (isDrawing) => set({ isDrawing }),
        setDrawMode: (drawMode) => set({ drawMode }),
        setShapeMode: (shapeMode) => set({ shapeMode }),
        toogleShapeMode: () =>
            set((state) => ({
                shapeMode:
                    state.shapeMode === ShapeModeEnum.FILL
                        ? ShapeModeEnum.STROKE
                        : ShapeModeEnum.FILL,
            })),
        setCanvasSettings: (canvasSettings) => set({ canvasSettings }),
        resetCanvasSettings: () =>
            set({ canvasSettings: initialCanvasSettings() }),
        resetCanvasState: () => set(initialState()),
    },
}));
