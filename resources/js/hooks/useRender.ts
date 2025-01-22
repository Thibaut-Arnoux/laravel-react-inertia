import { useCanvas } from '@/hooks/useCanvas';
import { useDragRender } from '@/hooks/useDragRender';
import { useDrawRender } from '@/hooks/useDrawRender';
import { useMouseLeftClick, useMouseMove } from '@/hooks/useMouseEventStore';
import { useEffect } from 'react';
import { useCanvasSettings, useZoom } from './useCanvasStore';

export const useRender = () => {
    const zoom = useZoom();

    const { redraw, drawStack, syncCanvasSettings } = useCanvas();
    const settings = useCanvasSettings();
    const mouseLeftClick = useMouseLeftClick();
    const mouseMove = useMouseMove();
    const { dragRender } = useDragRender();
    const { drawRender } = useDrawRender();

    /**
     * Redraw on mouse events
     */
    useEffect(() => {
        if (!mouseMove || !mouseLeftClick) return;

        const { offsetX: startX, offsetY: startY } = mouseLeftClick;
        const { offsetX: endX, offsetY: endY } = mouseMove;

        // prevent redraw if there is no change,
        // this ensure mouseLeftClick action are triggered before redraw
        if (startX === endX && startY === endY) return;

        // convert coordinates to canvas space
        const inverseMatrix = settings.transform.inverse();

        const start = new DOMPoint(startX, startY).matrixTransform(
            inverseMatrix,
        );
        const end = new DOMPoint(endX, endY).matrixTransform(inverseMatrix);

        // matrix transform before redraw
        dragRender(end.x - start.x, end.y - start.y);

        redraw();

        drawRender(start.x, start.y, end.x, end.y);
    }, [
        redraw,
        dragRender,
        drawRender,
        mouseMove,
        mouseLeftClick,
        settings.transform,
    ]);

    /**
     * Redraw on zomm events
     */
    useEffect(() => {
        // matrix transform before redraw
        drawStack.current.forEach((drawable) => {
            const settings = drawable.exportSettings();

            if (!settings) return;

            // reset scale, zoom including previous scaling
            const transform = new DOMMatrix(settings.transform.toString());
            transform.a = 1;
            transform.d = 1;

            drawable.saveSettings({
                ...settings,
                transform: transform.scale(zoom),
            });
        });

        const transform = new DOMMatrix(settings.transform.toString());
        transform.a = 1;
        transform.d = 1;
        transform.scaleSelf(zoom);

        syncCanvasSettings({
            ...settings,
            transform: transform,
        });

        redraw();
    }, [redraw, syncCanvasSettings, zoom, drawStack]);
};
