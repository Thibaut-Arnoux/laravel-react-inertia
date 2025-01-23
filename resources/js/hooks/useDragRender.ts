import { ModeEnum } from '@/enums/mode';
import { useCanvas } from '@/hooks/useCanvas';
import { useMode } from '@/hooks/useCanvasStore';
import { useMouseLeftClick } from '@/hooks/useMouseEventStore';
import { useEffect, useRef } from 'react';

export const useDragRender = () => {
    // saved transformation before dragging and reset after
    const tranform = useRef<DOMMatrix>(new DOMMatrix());

    const mode = useMode();
    const { canvasRef } = useCanvas();
    const mouseLeftClick = useMouseLeftClick();

    const ctx = canvasRef.current?.getContext('2d');

    useEffect(() => {
        if (!ctx || mouseLeftClick === null || mode !== ModeEnum.DRAGGABLE)
            return;

        tranform.current = ctx.getTransform();
    }, [mouseLeftClick, mode, ctx]);

    useEffect(() => {
        if (mouseLeftClick || mode !== ModeEnum.DRAGGABLE) return;

        tranform.current = new DOMMatrix();
    }, [mouseLeftClick, mode]);

    const dragRender = (dragX: number, dragY: number) => {
        if (!ctx || mode !== ModeEnum.DRAGGABLE) return;

        ctx.setTransform(tranform.current.translate(dragX, dragY));
    };

    return { dragRender };
};
