import { IDrawable } from '@/classes/IDrawable';
import { create } from 'zustand';

type DrawStackState = {
    drawStack: IDrawable[];
    drawStackTemp: IDrawable[];
};

type DrawStackActions = {
    actions: {
        addDrawable: (drawable: IDrawable) => void;
        undo: () => void;
        redo: () => void;
        resetDrawStackTemp: () => void;
        resetDrawStackState: () => void;
    };
};

const initalState = (): DrawStackState => ({
    drawStack: [],
    drawStackTemp: [],
});

export const drawStackStore = create<DrawStackState & DrawStackActions>(
    (set) => ({
        ...initalState(),
        actions: {
            addDrawable: (drawable: IDrawable) =>
                set((state) => ({
                    drawStack: [...state.drawStack, drawable],
                })),
            undo: () =>
                set((state) => {
                    if (state.drawStack.length === 0) return state;

                    const newDrawStack = state.drawStack.slice(0, -1);
                    const poppedElement =
                        state.drawStack[state.drawStack.length - 1];

                    return {
                        drawStack: newDrawStack,
                        drawStackTemp: [...state.drawStackTemp, poppedElement],
                    };
                }),
            redo: () =>
                set((state) => {
                    if (state.drawStackTemp.length === 0) return state;

                    const newDrawStackTemp = state.drawStackTemp.slice(0, -1);
                    const poppedElement =
                        state.drawStackTemp[state.drawStackTemp.length - 1];

                    return {
                        drawStack: [...state.drawStack, poppedElement],
                        drawStackTemp: newDrawStackTemp,
                    };
                }),
            resetDrawStackTemp: () => set({ drawStackTemp: [] }),
            resetDrawStackState: () => set(initalState()),
        },
    }),
);
