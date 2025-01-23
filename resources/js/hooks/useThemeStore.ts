import { themeStore } from '@/stores/themeStore';

// states
export const useTheme = () => themeStore((state) => state.theme);

// actions
export const useThemeActions = () => themeStore((state) => state.actions);
