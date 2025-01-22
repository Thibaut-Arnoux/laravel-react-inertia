import { ShapeModeEnum } from '@/enums/shape';

export const CanvasDefaultSettings = {
    LINE_WIDTH: 2,
    COLOR_DARK: '#000000',
    COLOR_LIGHT: '#FFFFFF',
    TRANSPARENCY: 255,
} as const;

export const ZoomSettings = {
    DEFAULT: 1,
    STEP: 0.05,
    MIN: 0.1,
    MAX: 8,
} as const;

export type CanvasSettings = {
    lineWidth: CanvasPathDrawingStyles['lineWidth'];
    strokeStyle: CanvasFillStrokeStyles['strokeStyle'];
    fillStyle: CanvasFillStrokeStyles['fillStyle'];
    transparency: number;
    transform: DOMMatrix;
};

export type ShapeMode = (typeof ShapeModeEnum)[keyof typeof ShapeModeEnum];
