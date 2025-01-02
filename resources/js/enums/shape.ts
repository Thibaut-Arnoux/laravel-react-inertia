export const ShapeModeEnum = {
    STROKE: 'stroke',
    FILL: 'fill',
} as const;

export type ShapeMode = (typeof ShapeModeEnum)[keyof typeof ShapeModeEnum];
