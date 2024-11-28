import { useCanvas } from '@/hooks/useCanvas';
import { useMouseEventActions } from '@/hooks/useMouseEvent';
import { useEventListener } from 'usehooks-ts';

export const useMouseUp = () => {
    const { canvasRef, setIsDrawing } = useCanvas();
    const { setMouseLeftClick } = useMouseEventActions();

    const handleMouseUp = () => {
        setIsDrawing(false);
        setMouseLeftClick(null);
    };

    useEventListener('mouseup', handleMouseUp, canvasRef);
};
