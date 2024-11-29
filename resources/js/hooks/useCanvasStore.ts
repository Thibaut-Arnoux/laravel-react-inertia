import { canvasStore } from '@/stores/canvasStore';

// states
export const useIsDrawing = () => canvasStore((state) => state.isDrawing);
export const useDrawMode = () => canvasStore((state) => state.drawMode);
export const useLineWidth = () => canvasStore((state) => state.lineWidth);

// actions
export const useCanvasActions = () => canvasStore((state) => state.actions);
