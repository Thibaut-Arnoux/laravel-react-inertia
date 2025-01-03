import { ThemeEnum } from '@/enums/theme';
import { Theme } from '@/types/theme';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeState = {
    theme: Theme;
};

type ThemeActions = {
    actions: {
        toggleTheme: () => void;
        setTheme: (theme: Theme) => void;
        resetTheme: () => void;
    };
};

const initialState: ThemeState = {
    theme: ThemeEnum.LIGHT,
};

export const themeStore = create<ThemeState & ThemeActions>()(
    persist(
        (set) => ({
            ...initialState,
            actions: {
                toggleTheme: () =>
                    set((state) => ({
                        theme:
                            state.theme === ThemeEnum.LIGHT
                                ? ThemeEnum.DARK
                                : ThemeEnum.LIGHT,
                    })),
                setTheme: (theme) => set({ theme }),
                resetTheme: () => set(initialState),
            },
        }),
        {
            name: 'theme',
            // @see https://github.com/pmndrs/zustand/issues/457 actions are not persisted
            merge: (persistedState, currentState) => {
                const typedPersistedState = persistedState as
                    | (ThemeState & ThemeActions)
                    | undefined;

                return {
                    ...currentState,
                    ...typedPersistedState,
                    actions: currentState.actions,
                };
            },
        },
    ),
);
