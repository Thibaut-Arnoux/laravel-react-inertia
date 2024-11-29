import { IDrawable } from './IDrawable';

export abstract class Shape implements IDrawable {
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    abstract draw(ctx: CanvasRenderingContext2D): void;

    isValid(): boolean {
        return this.width > 0 && this.height > 0;
    }
}
