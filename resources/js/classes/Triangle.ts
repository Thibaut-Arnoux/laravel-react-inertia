import { Drawable } from './Drawable';

export class Triangle extends Drawable {
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(this.x + this.width / 2, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);
        ctx.lineTo(this.x, this.y + this.height);
        ctx.closePath();
        ctx.stroke();
    }
}