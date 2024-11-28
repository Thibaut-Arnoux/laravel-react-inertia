import { useCanvas } from '@/hooks/useCanvas';
import { useCanvasActions } from '@/hooks/useCanvasStore';
import { useMouseEventActions } from '@/hooks/useMouseEvent';
import { useEventListener } from 'usehooks-ts';

export const useMouseUp = () => {
    const { canvasRef } = useCanvas();
    const { setMouseLeftClick } = useMouseEventActions();
    const { setIsDrawing } = useCanvasActions();

    const handleMouseUp = () => {
        setIsDrawing(false);
        setMouseLeftClick(null);
    };

    useEventListener('mouseup', handleMouseUp, canvasRef);
};
