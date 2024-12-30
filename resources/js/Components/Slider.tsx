import { useCanvas } from '@/hooks/useCanvas';
import { useCanvasSettings } from '@/hooks/useCanvasStore';
import { ChangeEvent } from 'react';

export const Slider = () => {
    const settings = useCanvasSettings();
    const { syncCanvasSettings } = useCanvas();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        syncCanvasSettings({
            ...settings,
            lineWidth: Number(e.target.value),
        });
    };

    return (
        <input
            type="range"
            min={1}
            max={10}
            value={settings.lineWidth}
            onChange={handleChange}
            className="range range-xs w-16"
        />
    );
};
