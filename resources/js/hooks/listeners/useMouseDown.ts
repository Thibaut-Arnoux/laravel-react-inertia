import { ButtonEnum } from '@/enums/button';
import { useCanvas } from '@/hooks/useCanvas';
import { useCanvasActions } from '@/hooks/useCanvasStore';
import { useMouseEventActions } from '@/hooks/useMouseEventStore';
import { useEventListener } from 'usehooks-ts';

export const useMouseDown = () => {
    const { canvasRef } = useCanvas();
    const { setMouseLeftClick } = useMouseEventActions();
    const { setIsDrawing } = useCanvasActions();

    const handleMouseDown = (e: MouseEvent) => {
        switch (e.button) {
            case ButtonEnum.LEFT:
                setIsDrawing(true);
                setMouseLeftClick(e);
                break;
            default:
                break;
        }
    };

    useEventListener('mousedown', handleMouseDown, canvasRef);
};
