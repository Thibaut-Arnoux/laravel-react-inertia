import { IDrawable } from '@/classes/IDrawable';
import { Line } from '@/classes/Line';
import { Pen } from '@/classes/Pen';
import { Rectangle } from '@/classes/Rectangle';
import { RightTriangle } from '@/classes/RightTriangle';
import { Triangle } from '@/classes/Triangle';
import { useCanvas } from '@/hooks/useCanvas';
import {
    useCanvasSettings,
    useDrawMode,
    useShapeMode,
} from '@/hooks/useCanvasStore';
import { useMouseLeftClick, useMouseMove } from '@/hooks/useMouseEventStore';
import { useEffect, useRef } from 'react';

const extractBoundingRect = (
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
    const drawable = useRef<IDrawable | null>(null);

    const drawMode = useDrawMode();
    const shapeMode = useShapeMode();
    const { canvasRef, redraw, drawStack } = useCanvas();
    const canvasSettings = useCanvasSettings();
    const mouseLeftClick = useMouseLeftClick();
    const mouseMove = useMouseMove();

    const ctx = canvasRef.current?.getContext('2d');

    useEffect(() => {
        if (!ctx || !mouseMove || !mouseLeftClick || !drawMode) return;

        const { offsetX: startX, offsetY: startY } = mouseLeftClick;
        const { offsetX: endX, offsetY: endY } = mouseMove;
        const { x, y, width, height } = extractBoundingRect(
            startX,
            startY,
            endX,
            endY,
        );

        redraw();

        switch (drawMode) {
            case 'rectangle':
                drawable.current = new Rectangle(
                    x,
                    y,
                    width,
                    height,
                    shapeMode,
                );
                drawable.current.draw(ctx);
                break;
            case 'triangle':
                drawable.current = new Triangle(x, y, width, height, shapeMode);
                drawable.current.draw(ctx);
                break;
            case 'rightTriangle':
                drawable.current = new RightTriangle(
                    x,
                    y,
                    width,
                    height,
                    shapeMode,
                );
                drawable.current.draw(ctx);
                break;
            case 'line':
                drawable.current = new Line(startX, startY, endX, endY);
                drawable.current.draw(ctx);
                break;
            case 'pen':
                drawable.current = new Pen(
                    startX,
                    startY,
                    drawable.current instanceof Pen
                        ? [
                              ...drawable.current.coordinates,
                              { x: endX, y: endY },
                          ]
                        : [],
                );
                drawable.current.draw(ctx);
                break;
            default:
                break;
        }
    }, [ctx, redraw, mouseLeftClick, mouseMove, drawMode, shapeMode]);

    useEffect(() => {
        if (mouseLeftClick || !drawable.current?.isValid()) return;

        drawStack.current.push({
            drawable: drawable.current,
            settings: canvasSettings,
        });
        drawable.current = null;
    }, [mouseLeftClick, drawStack, canvasSettings]);
};
