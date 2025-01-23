export const DrawModeEnum = {
    RECTANGLE: 'rectangle',
    TRIANGLE: 'triangle',
    RIGHT_TRIANGLE: 'rightTriangle',
    LINE: 'line',
    PEN: 'pen',
} as const;

export const DrawModeList = Object.values(DrawModeEnum);

export const ModeEnum = {
    // TODO: SELECTION: 'selection',
    DRAGGABLE: 'draggable',
    ...DrawModeEnum,
} as const;

export const ModeList = Object.values(ModeEnum);
