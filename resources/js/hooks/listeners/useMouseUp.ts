import { useCanvas } from '@/hooks/useCanvas';
import { useEventListener } from 'usehooks-ts';

export const useMouseUp = () => {
    const { canvasRef, setIsDrawing, setMouseLeftClick } = useCanvas();

    const handleMouseUp = () => {
        setIsDrawing(false);
        setMouseLeftClick(null);
    };

    useEventListener('mouseup', handleMouseUp, canvasRef);
};
