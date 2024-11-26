import { useEventListener } from "usehooks-ts"
import { useCanvas } from "@/hooks/useCanvas";

export const useMouseMove = () => {
    const { canvasRef, setMouseMove } = useCanvas();

    const handleMouseMove = (e: MouseEvent) => {
        setMouseMove(e);
    };

    useEventListener('mousemove', handleMouseMove, canvasRef);
}