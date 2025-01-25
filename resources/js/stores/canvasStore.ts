import { ModeEnum } from '@/enums/mode';
import { ShapeModeEnum } from '@/enums/shape';
import { ThemeEnum } from '@/enums/theme';
import { themeStore } from '@/stores/themeStore';
import {
    CanvasDefaultSettings,
    CanvasSettings,
    ShapeMode,
    ZoomSettings,
} from '@/types/canvas';
import { Mode } from '@/types/mode';
import { create } from 'zustand';

type CanvasState = {
    isDrawing: boolean;
    mode: Mode;
    shapeMode: ShapeMode;
    zoom: number;
    canvasSettings: CanvasSettings;
};

type CanvasActions = {
    actions: {
        setIsDrawing: (isDrawing: boolean) => void;
        setMode: (mode: Mode) => void;
        setShapeMode: (shapeMode: ShapeMode) => void;
        toogleShapeMode: () => void;
        setZoom: (zoom: number) => void;
        zoomIn: () => void;
        zoomOut: () => void;
        setCanvasSettings: (canvasSettings: CanvasSettings) => void;
        resetDrawSettings: () => void;
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
});

const initialState = (): CanvasState => ({
    isDrawing: false,
    mode: ModeEnum.DRAGGABLE,
    shapeMode: ShapeModeEnum.STROKE,
    zoom: ZoomSettings.DEFAULT,
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
        setZoom: (zoom) =>
            set(() => {
                if (zoom > ZoomSettings.MAX) {
                    return { zoom: ZoomSettings.MAX };
                } else if (zoom < ZoomSettings.MIN) {
                    return { zoom: ZoomSettings.MIN };
                } else {
                    return { zoom };
                }
            }),
        zoomIn: () =>
            set((state) => ({
                zoom:
                    state.zoom + ZoomSettings.STEP > ZoomSettings.MAX
                        ? ZoomSettings.MAX
                        : state.zoom + ZoomSettings.STEP,
            })),
        zoomOut: () =>
            set((state) => ({
                zoom:
                    state.zoom - ZoomSettings.STEP < ZoomSettings.MIN
                        ? ZoomSettings.MIN
                        : state.zoom - ZoomSettings.STEP,
            })),
        setCanvasSettings: (canvasSettings) => set({ canvasSettings }),
        resetDrawSettings: () =>
            set({ canvasSettings: initialCanvasSettings() }),
        resetCanvasState: () => set(initialState()),
    },
}));
