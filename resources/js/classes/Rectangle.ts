import { Drawable } from './Drawable';

export class Rectangle extends Drawable {
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
}
