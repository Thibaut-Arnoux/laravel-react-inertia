import { ButtonEnum } from '@/enums/button';
import { useCanvas } from '@/hooks/useCanvas';
import { useMouseEventActions } from '@/hooks/useMouseEvent';
import { useEventListener } from 'usehooks-ts';

export const useMouseDown = () => {
    const { canvasRef, setIsDrawing } = useCanvas();
    const { setMouseLeftClick } = useMouseEventActions();

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
