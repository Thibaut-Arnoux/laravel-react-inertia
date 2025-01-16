import { IDrawable } from '@/classes/IDrawable';
import { CanvasSettings } from '@/types/canvas';
import { applyCanvasSettings } from '@/utils/canvas';

export abstract class Drawable implements IDrawable {
    protected settings?: CanvasSettings;

    private _applyCanvasSettings = (ctx: CanvasRenderingContext2D) => {
        if (this.settings === undefined) return;

        applyCanvasSettings(ctx, this.settings);
    };

    public exportSettings() {
        return this.settings ?? null;
    }

    public saveSettings(settings: CanvasSettings): void {
        this.settings = settings;
    }

    public redraw(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        this._applyCanvasSettings(ctx);
        this.draw(ctx);
        ctx.restore();
    }

    public abstract draw(ctx: CanvasRenderingContext2D): void;

    public abstract isValid(): boolean;
}
