import { Rectangle } from '@/classes/Rectangle';
import { useCanvas } from '@/hooks/useCanvas';
import { useEffect, useRef } from 'react';

export const Shape = () => {
    const { canvasRef, redraw, drawStack, mouseLeftClick, mouseMove } =
        useCanvas();
    const ctx = canvasRef.current?.getContext('2d');
    const rectangle = useRef<Rectangle | null>(null);

    useEffect(() => {
        if (!ctx || !mouseMove || !mouseLeftClick) return;

        redraw();

        const { offsetX: startX, offsetY: startY } = mouseLeftClick;
        const { offsetX: endX, offsetY: endY } = mouseMove;

        // Calculate width and height
        const width = Math.abs(endX - startX);
        const height = Math.abs(endY - startY);

        // Determine top-left corner coordinates
        const x = Math.min(startX, endX);
        const y = Math.min(startY, endY);

        // Draw rectangle
        rectangle.current = new Rectangle(x, y, width, height);
        rectangle.current.draw(ctx);
    }, [ctx, redraw, mouseLeftClick, mouseMove]);

    useEffect(() => {
        if (
            mouseLeftClick ||
            !rectangle.current ||
            (!rectangle.current.width && !rectangle.current.height)
        )
            return;

        drawStack.current.push(rectangle.current);
        rectangle.current = null;
    }, [mouseLeftClick, drawStack]);

    return <></>;
};
