import { Drawable } from '@/classes/Drawable';
import { ShapeModeEnum } from '@/enums/shape';
import { ShapeMode } from '@/types/canvas';

export abstract class Shape extends Drawable {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public mode: ShapeMode;

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

    public abstract draw(ctx: CanvasRenderingContext2D): void;

    public isValid(): boolean {
        return this.width > 0 && this.height > 0;
    }
}
