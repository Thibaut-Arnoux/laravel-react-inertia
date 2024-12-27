export const ThemeEnum = {
    LIGHT: 'light',
    DARK: 'dark',
} as const;

export const ThemeList = Object.values(ThemeEnum);

export type Theme = (typeof ThemeEnum)[keyof typeof ThemeEnum];