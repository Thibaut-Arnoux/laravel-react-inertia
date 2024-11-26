import { useCanvas } from '@/hooks/useCanvas';
import { useEventListener } from 'usehooks-ts';

export const useMouseDown = () => {
    const { canvasRef, setIsDrawing, setMouseLeftClick } = useCanvas();

    const handleMouseDown = (e: MouseEvent) => {
        setIsDrawing(true);
        setMouseLeftClick(e);
    };

    useEventListener('mousedown', handleMouseDown, canvasRef);
};
