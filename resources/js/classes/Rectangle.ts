import { Shape } from '@/classes/Shape';

export class Rectangle extends Shape {
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
}
