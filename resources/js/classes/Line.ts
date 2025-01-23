import { Drawable } from '@/classes/Drawable';

export class Line extends Drawable {
    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;

    constructor(startX: number, startY: number, endX: number, endY: number) {
        super();

        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke();
    }

    public isValid(): boolean {
        return this.startX !== this.endX && this.startY !== this.endY;
    }
}
