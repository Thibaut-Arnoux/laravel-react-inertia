import { useCanvas } from '@/hooks/useCanvas';
import { useMouseEventActions } from '@/hooks/useMouseEvent';
import { useEventListener } from 'usehooks-ts';

export const useMouseMove = () => {
    const { canvasRef } = useCanvas();
    const { setMouseMove } = useMouseEventActions();

    const handleMouseMove = (e: MouseEvent) => {
        setMouseMove(e);
    };

    useEventListener('mousemove', handleMouseMove, canvasRef);
};
