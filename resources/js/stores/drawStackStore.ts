import { IDrawStackItem } from '@/types/canvas';
import { create } from 'zustand';

type DrawStackState = {
    drawStack: IDrawStackItem[];
    drawStackTemp: IDrawStackItem[];
};

type DrawStackActions = {
    actions: {
        addDrawStackItem: (drawStackItem: IDrawStackItem) => void;
        removeDrawStackItem: (id: string) => void;
        removeDrawStackItems: () => void;
        toggleDrawStackItem: (id: string) => void;
        setSelectedDrawStackItems: (selected: boolean) => void;
        upDrawStackItem: (id: string) => void;
        downDrawStackItem: (id: string) => void;
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
            addDrawStackItem: (drawStackItem: IDrawStackItem) =>
                set((state) => ({
                    drawStack: [...state.drawStack, drawStackItem],
                })),
            removeDrawStackItem: (id: string) =>
                set((state) => ({
                    drawStack: state.drawStack.filter(
                        (drawStackItem) => drawStackItem.id !== id,
                    ),
                })),
            removeDrawStackItems: () =>
                set((state) => ({
                    drawStack: state.drawStack.filter(
                        (drawStackItem) => !drawStackItem.selected,
                    ),
                })),
            toggleDrawStackItem: (id: string) =>
                set((state) => ({
                    drawStack: state.drawStack.map((drawStackItem) =>
                        drawStackItem.id === id
                            ? Object.assign(drawStackItem, {
                                  selected: !drawStackItem.selected,
                              })
                            : drawStackItem,
                    ),
                })),
            setSelectedDrawStackItems: (selected: boolean) =>
                set((state) => ({
                    drawStack: state.drawStack.map((drawStackItem) =>
                        Object.assign(drawStackItem, {
                            selected: selected,
                        }),
                    ),
                })),
            upDrawStackItem: (id: string) =>
                set((state) => {
                    const index = state.drawStack.findIndex(
                        (drawStackItem) => drawStackItem.id === id,
                    );

                    if (index < 1) return state;

                    return {
                        drawStack: [
                            ...state.drawStack.slice(0, index - 1),
                            state.drawStack[index],
                            state.drawStack[index - 1],
                            ...state.drawStack.slice(index + 1),
                        ],
                    };
                }),
            downDrawStackItem: (id: string) =>
                set((state) => {
                    const index = state.drawStack.findIndex(
                        (drawStackItem) => drawStackItem.id === id,
                    );

                    if (index < 0 || index >= state.drawStack.length - 1)
                        return state;

                    return {
                        drawStack: [
                            ...state.drawStack.slice(0, index),
                            state.drawStack[index + 1],
                            state.drawStack[index],
                            ...state.drawStack.slice(index + 2),
                        ],
                    };
                }),
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
