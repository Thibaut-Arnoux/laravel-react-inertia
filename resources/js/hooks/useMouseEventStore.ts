import { mouseEventStore } from '@/stores/mouseEventStore';

// states
export const useMouseLeftClick = () =>
    mouseEventStore((state) => state.mouseLeftClick);

export const useMouseMove = () => mouseEventStore((state) => state.mouseMove);

// actions
export const useMouseEventActions = () =>
    mouseEventStore((state) => state.actions);
