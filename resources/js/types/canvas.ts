import { ShapeModeEnum } from '@/enums/shape';

export const CanvasDefaultSettings = {
    LINE_WIDTH: 2,
    COLOR_DARK: '#000000',
    COLOR_LIGHT: '#FFFFFF',
    TRANSPARENCY: 255,
} as const;

export type CanvasSettings = {
    lineWidth: CanvasPathDrawingStyles['lineWidth'];
    strokeStyle: CanvasFillStrokeStyles['strokeStyle'];
    fillStyle: CanvasFillStrokeStyles['fillStyle'];
    transparency: number;
};

export type ShapeMode = (typeof ShapeModeEnum)[keyof typeof ShapeModeEnum];
