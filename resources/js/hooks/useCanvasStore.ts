import { canvasStore } from '@/stores/canvasStore';

// states
export const useIsDrawing = () => canvasStore((state) => state.isDrawing);
export const useMode = () => canvasStore((state) => state.mode);
export const useShapeMode = () => canvasStore((state) => state.shapeMode);
export const useZoom = () => canvasStore((state) => state.zoom);
export const useCanvasSettings = () =>
    canvasStore((state) => state.canvasSettings);

// actions
export const useCanvasActions = () => canvasStore((state) => state.actions);
