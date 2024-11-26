import { useCanvas } from '@/hooks/useCanvas';

export const Coordinates = () => {
    const { mouseMove } = useCanvas();

    return (
        <div className="flex flex-row gap-2">
            <span>x: {mouseMove?.offsetX}</span>
            <span>y: {mouseMove?.offsetY}</span>
        </div>
    );
};
