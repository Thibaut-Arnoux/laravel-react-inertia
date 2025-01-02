import { CanvasSettings } from '@/types/canvas';

export interface IDrawable {
    draw(ctx: CanvasRenderingContext2D): void;

    redraw(ctx: CanvasRenderingContext2D): void;

    saveSettings(settings: CanvasSettings): void;

    isValid(): boolean;
}
