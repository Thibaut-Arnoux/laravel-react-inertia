import { useCanvas } from '@/hooks/useCanvas';
import { useLineWidth } from '@/hooks/useCanvasStore';
import { ChangeEvent } from 'react';

export const Slider = () => {
    const lineWidth = useLineWidth();
    const { setCanvasLineWidth } = useCanvas();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCanvasLineWidth(Number(e.target.value));
    };

    return (
        <input
            type="range"
            min={1}
            max={10}
            value={lineWidth}
            onChange={handleChange}
            className="range range-xs w-16"
        />
    );
};
