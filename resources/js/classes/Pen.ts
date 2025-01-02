import { Drawable } from '@/classes/Drawable';

type Coordinate = {
    x: number;
    y: number;
};

export class Pen extends Drawable {
    startX: number;
    startY: number;
    coordinates: Coordinate[];

    constructor(startX: number, startY: number, coordinates: Coordinate[]) {
        super();

        this.startX = startX;
        this.startY = startY;
        this.coordinates = coordinates;
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        this.coordinates.forEach((coordinate) => {
            ctx.lineTo(coordinate.x, coordinate.y);
        });
        ctx.stroke();
    }

    public isValid(): boolean {
        return this.coordinates.length > 0;
    }
}
