import { DrawModeEnum, DrawModeList, ModeEnum } from '@/enums/mode';

export type DrawMode = (typeof DrawModeEnum)[keyof typeof DrawModeEnum];

export type Mode = (typeof ModeEnum)[keyof typeof ModeEnum];

export const isDrawableMode = (mode: Mode): mode is DrawMode => {
    return DrawModeList.includes(mode as DrawMode);
};
