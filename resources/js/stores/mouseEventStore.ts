import { create } from 'zustand';

type MouseEventState = {
    mouseLeftClick: MouseEvent | null;
    mouseMove: MouseEvent | null;
};

type MouseEventActions = {
    actions: {
        setMouseLeftClick: (mouseLeftLick: MouseEvent | null) => void;
        setMouseMove: (mouseMove: MouseEvent | null) => void;
    };
};

const initialState: MouseEventState = {
    mouseLeftClick: null,
    mouseMove: null,
};

export const mouseEventStore = create<MouseEventState & MouseEventActions>(
    (set) => ({
        ...initialState,
        actions: {
            setMouseLeftClick: (mouseLeftClick) => set({ mouseLeftClick }),
            setMouseMove: (mouseMove) => set({ mouseMove }),
        },
    }),
);
