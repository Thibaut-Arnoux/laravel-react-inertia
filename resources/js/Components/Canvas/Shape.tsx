import { Drawable } from '@/classes/Drawable';
import { Rectangle } from '@/classes/Rectangle';
import { useCanvas } from '@/hooks/useCanvas';
import { useEffect, useRef } from 'react';

export type ShapeMode = 'rectangle' | 'circle' | 'line' | 'triangle';

export const Shape = () => {
    const {
        canvasRef,
        redraw,
        drawStack,
        shapeMode,
        mouseLeftClick,
        mouseMove,
    } = useCanvas();
    const ctx = canvasRef.current?.getContext('2d');
    const drawable = useRef<Drawable | null>(null);

    useEffect(() => {
        if (!ctx || !mouseMove || !mouseLeftClick || !shapeMode) return;

        redraw();

        const { offsetX: startX, offsetY: startY } = mouseLeftClick;
        const { offsetX: endX, offsetY: endY } = mouseMove;

        // Calculate width and height
        const width = Math.abs(endX - startX);
        const height = Math.abs(endY - startY);

        // Determine top-left corner coordinates
        const x = Math.min(startX, endX);
        const y = Math.min(startY, endY);

        // Draw rectangle
        switch (shapeMode) {
            case 'rectangle':
                drawable.current = new Rectangle(x, y, width, height);
                drawable.current.draw(ctx);
                break;
            default:
                break;
        }
    }, [ctx, redraw, mouseLeftClick, mouseMove, shapeMode]);

    useEffect(() => {
        if (
            mouseLeftClick ||
            !drawable.current ||
            (!drawable.current.width && !drawable.current.height)
        )
            return;

        drawStack.current.push(drawable.current);
        drawable.current = null;
    }, [mouseLeftClick, drawStack]);

    return <></>;
};
