import { IDrawable } from '@/classes/IDrawable';
import { ShapeMode, ShapeModeEnum } from '@/enums/shape';

export abstract class Shape implements IDrawable {
    x: number;
    y: number;
    width: number;
    height: number;
    mode: ShapeMode;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        mode: ShapeMode = ShapeModeEnum.STROKE,
    ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.mode = mode;
    }

    abstract draw(ctx: CanvasRenderingContext2D): void;

    isValid(): boolean {
        return this.width > 0 && this.height > 0;
    }
}
