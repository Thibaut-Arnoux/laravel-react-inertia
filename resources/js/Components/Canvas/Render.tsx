import { useCanvas } from '@/hooks/useCanvas';
import { useDragRender } from '@/hooks/useDragRender';
import { useDrawRender } from '@/hooks/useDrawRender';
import { useMouseLeftClick, useMouseMove } from '@/hooks/useMouseEventStore';
import { useEffect } from 'react';

export const Render = () => {
    const { canvasRef, redraw } = useCanvas();
    const mouseLeftClick = useMouseLeftClick();
    const mouseMove = useMouseMove();
    const { dragRender } = useDragRender();
    const { drawRender } = useDrawRender();

    const ctx = canvasRef.current?.getContext('2d');

    /**
     * Redraw on mouse events
     */
    useEffect(() => {
        if (!ctx || !mouseMove || !mouseLeftClick) return;

        const { offsetX: startX, offsetY: startY } = mouseLeftClick;
        const { offsetX: endX, offsetY: endY } = mouseMove;

        // prevent redraw if there is no change,
        // this ensure mouseLeftClick action are triggered before redraw
        if (startX === endX && startY === endY) return;

        // reverse the matrix and map coordinates to the transformed space
        const inverseTransform = ctx.getTransform().inverse();
        const start = new DOMPoint(startX, startY).matrixTransform(
            inverseTransform,
        );
        const end = new DOMPoint(endX, endY).matrixTransform(inverseTransform);

        // matrix transform before redraw
        dragRender(end.x - start.x, end.y - start.y);

        redraw();

        drawRender(start.x, start.y, end.x, end.y);
    }, [redraw, dragRender, drawRender, mouseMove, mouseLeftClick, ctx]);

    return <></>;
};
