import { IDrawable } from '@/classes/IDrawable';

type Coordinate = {
    x: number;
    y: number;
};

export class Pen implements IDrawable {
    startX: number;
    startY: number;
    coordinates: Coordinate[];

    constructor(startX: number, startY: number, coordinates: Coordinate[]) {
        this.startX = startX;
        this.startY = startY;
        this.coordinates = coordinates;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(this.startX, this.startY);
        this.coordinates.forEach((coordinate) => {
            ctx.lineTo(coordinate.x, coordinate.y);
        });
        ctx.stroke();
    }

    isValid(): boolean {
        return true;
    }
}
