import { useCanvasSettings } from '@/hooks/useCanvasStore';
import { useMouseMove } from '@/hooks/useMouseEventStore';

export const Coordinates = () => {
    const settings = useCanvasSettings();
    const mouseMove = useMouseMove();

    const point = new DOMPoint(
        mouseMove?.offsetX ?? 0,
        mouseMove?.offsetY ?? 0,
    ).matrixTransform(settings.transform.inverse());

    const x = point.x.toFixed(0);
    const y = point.y.toFixed(0);

    return (
        <div className="flex flex-row gap-2 text-base-content">
            <span className="text-base-content">x: {x}</span>
            <span className="text-base-content">y: {y}</span>
        </div>
    );
};
