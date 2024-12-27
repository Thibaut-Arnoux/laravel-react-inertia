import { useMouseMove } from '@/hooks/useMouseEventStore';

export const Coordinates = () => {
    const mouseMove = useMouseMove();

    return (
        <div className="flex flex-row gap-2 text-base-content">
            <span>x: {mouseMove?.offsetX}</span>
            <span>y: {mouseMove?.offsetY}</span>
        </div>
    );
};