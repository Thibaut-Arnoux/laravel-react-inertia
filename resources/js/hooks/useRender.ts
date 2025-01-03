import { IDrawable } from '@/classes/IDrawable';
import { Line } from '@/classes/Line';
import { Pen } from '@/classes/Pen';
import { Rectangle } from '@/classes/Rectangle';
import { RightTriangle } from '@/classes/RightTriangle';
import { Triangle } from '@/classes/Triangle';
import { ModeEnum } from '@/enums/mode';
import { useCanvas } from '@/hooks/useCanvas';
import {
    useCanvasSettings,
    useMode,
    useShapeMode,
} from '@/hooks/useCanvasStore';
import { useMouseLeftClick, useMouseMove } from '@/hooks/useMouseEventStore';
import { extractBoundingRect } from '@/utils/canvas';
import { useEffect, useRef } from 'react';

export const useRender = () => {
    const drawable = useRef<IDrawable | null>(null);

    const mode = useMode();
    const shapeMode = useShapeMode();
    const { canvasRef, redraw, drawStack } = useCanvas();
    const canvasSettings = useCanvasSettings();
    const mouseLeftClick = useMouseLeftClick();
    const mouseMove = useMouseMove();

    const ctx = canvasRef.current?.getContext('2d');

    useEffect(() => {
        if (!ctx || !mouseMove || !mouseLeftClick || !mode) return;

        const { offsetX: startX, offsetY: startY } = mouseLeftClick;
        const { offsetX: endX, offsetY: endY } = mouseMove;
        const { x, y, width, height } = extractBoundingRect(
            startX,
            startY,
            endX,
            endY,
        );

        redraw();

        switch (mode) {
            case ModeEnum.RECTANGLE:
                drawable.current = new Rectangle(
                    x,
                    y,
                    width,
                    height,
                    shapeMode,
                );
                drawable.current.draw(ctx);
                break;
            case ModeEnum.TRIANGLE:
                drawable.current = new Triangle(x, y, width, height, shapeMode);
                drawable.current.draw(ctx);
                break;
            case ModeEnum.RIGHT_TRIANGLE:
                drawable.current = new RightTriangle(
                    x,
                    y,
                    width,
                    height,
                    shapeMode,
                );
                drawable.current.draw(ctx);
                break;
            case ModeEnum.LINE:
                drawable.current = new Line(startX, startY, endX, endY);
                drawable.current.draw(ctx);
                break;
            case ModeEnum.PEN:
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
    }, [ctx, redraw, mouseLeftClick, mouseMove, mode, shapeMode]);

    useEffect(() => {
        if (mouseLeftClick || !drawable.current?.isValid()) return;

        drawable.current.saveSettings(canvasSettings);
        drawStack.current.push(drawable.current);
        drawable.current = null;
    }, [mouseLeftClick, drawStack, canvasSettings]);
};
