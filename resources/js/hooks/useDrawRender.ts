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
import { useMouseLeftClick } from '@/hooks/useMouseEventStore';
import { isDrawableMode } from '@/types/mode';
import { extractBoundingRect } from '@/utils/canvas';
import { useEffect, useRef } from 'react';

export const useDrawRender = () => {
    const drawable = useRef<IDrawable | null>(null);

    const mode = useMode();
    const shapeMode = useShapeMode();
    const { canvasRef, drawStack, drawStackTemp } = useCanvas();
    const canvasSettings = useCanvasSettings();
    const mouseLeftClick = useMouseLeftClick();

    const ctx = canvasRef.current?.getContext('2d');

    useEffect(() => {
        if (mouseLeftClick || !drawable.current?.isValid()) return;

        drawable.current.saveSettings(canvasSettings);
        drawStack.current.push(drawable.current);
        drawStackTemp.current = [];
        drawable.current = null;
    }, [mouseLeftClick, drawStack, drawStackTemp, canvasSettings]);

    const drawRender = (
        startX: number,
        startY: number,
        endX: number,
        endY: number,
    ) => {
        if (!ctx || !isDrawableMode(mode)) return;

        const { x, y, width, height } = extractBoundingRect(
            startX,
            startY,
            endX,
            endY,
        );

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
    };

    return { drawRender };
};
