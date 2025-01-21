import { useCanvas } from '@/hooks/useCanvas';
import { useDragRender } from '@/hooks/useDragRender';
import { useDrawRender } from '@/hooks/useDrawRender';
import { useMouseLeftClick, useMouseMove } from '@/hooks/useMouseEventStore';
import { useEffect } from 'react';

export const useRender = () => {
    const { redraw } = useCanvas();
    const mouseLeftClick = useMouseLeftClick();
    const mouseMove = useMouseMove();
    const { dragRender } = useDragRender();
    const { drawRender } = useDrawRender();

    useEffect(() => {
        if (!mouseMove || !mouseLeftClick) return;

        const { offsetX: startX, offsetY: startY } = mouseLeftClick;
        const { offsetX: endX, offsetY: endY } = mouseMove;

        // prevent redraw if there is no change,
        // this ensure mouseLeftClick action are triggered before redraw
        if (startX === endX && startY === endY) return;

        // matrix transform before redraw
        dragRender(endX - startX, endY - startY);

        redraw();

        drawRender(startX, startY, endX, endY);
    }, [redraw, dragRender, drawRender, mouseMove, mouseLeftClick]);
};
