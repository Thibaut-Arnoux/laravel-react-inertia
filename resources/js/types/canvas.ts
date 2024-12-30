export const CanvasDefaultSettings = {
    LINE_WIDTH: 2,
    STROKE_DARK: '#000000',
    STROKE_LIGHT: '#ffffff',
} as const;

export type CanvasSettings = {
    lineWidth: CanvasPathDrawingStyles['lineWidth'];
    strokeStyle: CanvasFillStrokeStyles['strokeStyle'];
};
