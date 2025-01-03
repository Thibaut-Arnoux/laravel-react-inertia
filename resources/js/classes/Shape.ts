import { Drawable } from '@/classes/Drawable';
import { ShapeModeEnum } from '@/enums/shape';
import { ShapeMode } from '@/types/canvas';

export abstract class Shape extends Drawable {
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
        super();

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
