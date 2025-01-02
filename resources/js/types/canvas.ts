export const CanvasDefaultSettings = {
    LINE_WIDTH: 2,
    COLOR_DARK: '#000000',
    COLOR_LIGHT: '#ffffff',
} as const;

export type CanvasSettings = {
    lineWidth: CanvasPathDrawingStyles['lineWidth'];
    strokeStyle: CanvasFillStrokeStyles['strokeStyle'];
    fillStyle: CanvasFillStrokeStyles['fillStyle'];
};
