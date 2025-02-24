export const DrawModeEnum = {
    RECTANGLE: 'rectangle',
    TRIANGLE: 'triangle',
    RIGHT_TRIANGLE: 'rightTriangle',
    LINE: 'line',
    PEN: 'pen',
} as const;

export const DrawModeList = Object.values(DrawModeEnum);

export const ModeEnum = {
    DRAGGABLE: 'draggable',
    SELECTION: 'selection',
    ...DrawModeEnum,
} as const;

export const ModeList = Object.values(ModeEnum);
