import { Shape } from '@/classes/Shape';
import { ShapeModeEnum } from '@/enums/shape';

export class Rectangle extends Shape {
    public draw(ctx: CanvasRenderingContext2D) {
        this.mode === ShapeModeEnum.STROKE
            ? ctx.strokeRect(this.x, this.y, this.width, this.height)
            : ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
