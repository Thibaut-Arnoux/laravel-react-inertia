import { CanvasSettings } from '@/types/canvas';

export const extractBoundingRect = (
    startX: number,
    startY: number,
    endX: number,
    endY: number,
) => {
    // Calculate width and height
    const width = Math.abs(endX - startX);
    const height = Math.abs(endY - startY);

    // Determine top-left corner coordinates
    const x = Math.min(startX, endX);
    const y = Math.min(startY, endY);

    return { x, y, width, height };
};

export const applyCanvasSettings = (
    ctx: CanvasRenderingContext2D,
    settings: CanvasSettings,
) => {
    ctx.lineWidth = settings.lineWidth;
    ctx.strokeStyle = settings.strokeStyle;
    ctx.fillStyle = settings.fillStyle;
};
