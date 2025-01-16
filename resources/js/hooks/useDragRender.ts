import { ModeEnum } from '@/enums/mode';
import { useCanvas } from '@/hooks/useCanvas';
import { useMode } from '@/hooks/useCanvasStore';
import { useMouseLeftClick } from '@/hooks/useMouseEventStore';
import { translateMatrix } from '@/utils/matrix';
import { useEffect, useRef } from 'react';

export const useDragRender = () => {
    // saved transformations before dragging and reset after
    const tranforms = useRef<DOMMatrix[]>([]);

    const mode = useMode();
    const { drawStack } = useCanvas();
    const mouseLeftClick = useMouseLeftClick();

    useEffect(() => {
        if (mouseLeftClick === null || mode !== ModeEnum.DRAGGABLE) return;

        drawStack.current.forEach((drawable) => {
            const settings = drawable.exportSettings();
            if (!settings) return;

            tranforms.current.push(settings.transform);
        });
    }, [mouseLeftClick, mode, drawStack]);

    useEffect(() => {
        if (mouseLeftClick || mode !== ModeEnum.DRAGGABLE) return;

        tranforms.current = [];
    }, [mouseLeftClick, mode]);

    const dragRender = (dragX: number, dragY: number) => {
        if (mode === ModeEnum.DRAGGABLE) {
            for (const index in drawStack.current) {
                const drawable = drawStack.current[index];
                const tranform = tranforms.current[index];
                const settings = drawable.exportSettings();

                if (!settings) return;

                const translate = translateMatrix(dragX, dragY);

                drawable.saveSettings({
                    ...settings,
                    transform: tranform.multiply(translate),
                });
            }
        }
    };

    return { dragRender };
};
