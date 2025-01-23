import { useCanvas } from '@/hooks/useCanvas';
import { useMouseMove } from '@/hooks/useMouseEventStore';

export const Coordinates = () => {
    const { canvasRef } = useCanvas();
    const mouseMove = useMouseMove();

    const ctx = canvasRef.current?.getContext('2d');

    // reverse the matrix and move to the transformed space to display 'correct' coordinates
    const point = new DOMPoint(
        mouseMove?.offsetX ?? 0,
        mouseMove?.offsetY ?? 0,
    ).matrixTransform(ctx?.getTransform().inverse());

    const x = point.x.toFixed(0);
    const y = point.y.toFixed(0);

    return (
        <div className="flex flex-row gap-2 text-base-content">
            <span className="text-base-content">x: {x}</span>
            <span className="text-base-content">y: {y}</span>
        </div>
    );
};
