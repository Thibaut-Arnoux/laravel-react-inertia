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
        let width = Math.abs(endX - startX);
        let height = Math.abs(endY - startY);

        // Determine top-left corner coordinates
        let x = Math.min(startX, endX);
        let y = Math.min(startY, endY);

        // Draw rectangle
        rectangle.current = new Rectangle(x, y, width, height);
        rectangle.current.draw(ctx);
    }, [mouseLeftClick, mouseMove]);

    useEffect(() => {
        if (mouseLeftClick || !rectangle.current || (!rectangle.current.width && !rectangle.current.height)) return;

        drawStack.current.push(rectangle.current);
        rectangle.current = null;
    }, [mouseLeftClick]);

    return <></>;
};
