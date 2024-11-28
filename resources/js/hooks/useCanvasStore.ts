import { canvasStore } from '@/stores/canvasStore';

// states
export const useIsDrawing = () => canvasStore((state) => state.isDrawing);
export const useShapeMode = () => canvasStore((state) => state.shapeMode);

// actions
export const useCanvasActions = () => canvasStore((state) => state.actions);
