import { useCanvas } from '@/hooks/useCanvas';
import { useEventListener } from 'usehooks-ts';

export const useMouseMove = () => {
    const { canvasRef, setMouseMove } = useCanvas();

    const handleMouseMove = (e: MouseEvent) => {
        setMouseMove(e);
    };

    useEventListener('mousemove', handleMouseMove, canvasRef);
};
