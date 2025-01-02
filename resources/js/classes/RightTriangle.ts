import { Shape } from '@/classes/Shape';
import { ShapeModeEnum } from '@/enums/shape';

export class RightTriangle extends Shape {
    public draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);
        ctx.lineTo(this.x, this.y + this.height);
        ctx.closePath();
        this.mode === ShapeModeEnum.STROKE ? ctx.stroke() : ctx.fill();
    }
}
