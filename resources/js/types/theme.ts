import { ThemeEnum } from '@/enums/theme';

export type Theme = (typeof ThemeEnum)[keyof typeof ThemeEnum];
