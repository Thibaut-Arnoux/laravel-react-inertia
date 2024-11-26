import { useEventListener } from "usehooks-ts"
import { useCanvas } from "@/hooks/useCanvas";

export const useMouseUp = () => {
    const { canvasRef, setIsDrawing, setMouseLeftClick } = useCanvas();

    const handleMouseUp = (e: MouseEvent) => {
        setIsDrawing(false);
        setMouseLeftClick(null);
    };

    useEventListener('mouseup', handleMouseUp, canvasRef);
}