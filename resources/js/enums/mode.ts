const DrawModeEnum = {
    RECTANGLE: 'rectangle',
    TRIANGLE: 'triangle',
    RIGHT_TRIANGLE: 'rightTriangle',
    LINE: 'line',
    PEN: 'pen',
} as const;

export const DrawModeList = Object.values(DrawModeEnum);

export type DrawMode = (typeof DrawModeEnum)[keyof typeof DrawModeEnum];

export const isDrawableMode = (mode: Mode): mode is DrawMode => {
    return DrawModeList.includes(mode as DrawMode);
};

export const ModeEnum = {
    // TODO: SELECTION: 'selection',
    DRAGGABLE: 'draggable',
    ...DrawModeEnum,
} as const;

export const ModeList = Object.values(ModeEnum);

export type Mode = (typeof ModeEnum)[keyof typeof ModeEnum];
