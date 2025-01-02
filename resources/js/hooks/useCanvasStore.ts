import { canvasStore } from '@/stores/canvasStore';

// states
export const useIsDrawing = () => canvasStore((state) => state.isDrawing);
export const useDrawMode = () => canvasStore((state) => state.drawMode);
export const useShapeMode = () => canvasStore((state) => state.shapeMode);
export const useCanvasSettings = () =>
    canvasStore((state) => state.canvasSettings);

// actions
export const useCanvasActions = () => canvasStore((state) => state.actions);
