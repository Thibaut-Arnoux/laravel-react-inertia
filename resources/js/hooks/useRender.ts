import { Drawable } from '@/classes/Drawable';
import { Line } from '@/classes/Line';
import { Rectangle } from '@/classes/Rectangle';
import { RightTriangle } from '@/classes/RightTriangle';
import { Triangle } from '@/classes/Triangle';
import { useCanvas } from '@/hooks/useCanvas';
import { useEffect, useRef } from 'react';

const extractCoordinates = (
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

export const useRender = () => {
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

        const { offsetX: startX, offsetY: startY } = mouseLeftClick;
        const { offsetX: endX, offsetY: endY } = mouseMove;
        const { x, y, width, height } = extractCoordinates(
            startX,
            startY,
            endX,
            endY,
        );

        redraw();

        // Draw rectangle
        switch (shapeMode) {
            case 'rectangle':
                drawable.current = new Rectangle(x, y, width, height);
                drawable.current.draw(ctx);
                break;
            case 'triangle':
                drawable.current = new Triangle(x, y, width, height);
                drawable.current.draw(ctx);
                break;
            case 'rightTriangle':
                drawable.current = new RightTriangle(x, y, width, height);
                drawable.current.draw(ctx);
                break;
            case 'line':
                drawable.current = new Line(
                    startX,
                    startY,
                    endX - startX,
                    endY - startY,
                );
                drawable.current.draw(ctx);
                break;
            default:
                break;
        }
    }, [ctx, redraw, mouseLeftClick, mouseMove, shapeMode]);

    useEffect(() => {
        if (mouseLeftClick || !drawable.current?.isValid()) return;

        drawStack.current.push(drawable.current);
        drawable.current = null;
    }, [mouseLeftClick, drawStack]);
};
