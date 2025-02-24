import { drawStackStore } from '@/stores/drawStackStore';

// states
export const useDrawStack = () => drawStackStore((state) => state.drawStack);
export const useDrawStackTemp = () =>
    drawStackStore((state) => state.drawStackTemp);

// actions
export const useDrawStackActions = () =>
    drawStackStore((state) => state.actions);
