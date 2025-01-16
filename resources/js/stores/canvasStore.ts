import { ModeEnum } from '@/enums/mode';
import { ShapeModeEnum } from '@/enums/shape';
import { ThemeEnum } from '@/enums/theme';
import { themeStore } from '@/stores/themeStore';
import {
    CanvasDefaultSettings,
    CanvasSettings,
    ShapeMode,
} from '@/types/canvas';
import { Mode } from '@/types/mode';
import { create } from 'zustand';

type CanvasState = {
    isDrawing: boolean;
    mode: Mode;
    shapeMode: ShapeMode;
    canvasSettings: CanvasSettings;
};

type CanvasActions = {
    actions: {
        setIsDrawing: (isDrawing: boolean) => void;
        setMode: (mode: Mode) => void;
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
    transparency: CanvasDefaultSettings.TRANSPARENCY,
    transform: new DOMMatrix(), // this will be updated on tranform action (dragging, zooming) for redraw
});

const initialState = (): CanvasState => ({
    isDrawing: false,
    mode: ModeEnum.DRAGGABLE,
    shapeMode: ShapeModeEnum.STROKE,
    canvasSettings: initialCanvasSettings(),
});

export const canvasStore = create<CanvasState & CanvasActions>((set) => ({
    ...initialState(),
    actions: {
        setIsDrawing: (isDrawing) => set({ isDrawing }),
        setMode: (mode) => set({ mode: mode }),
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
