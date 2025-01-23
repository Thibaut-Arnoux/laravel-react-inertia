import { Slider } from '@/Components/Slider';
import { useCanvas } from '@/hooks/useCanvas';
import { useCanvasSettings } from '@/hooks/useCanvasStore';
import { ChangeEvent, HtmlHTMLAttributes } from 'react';

export const LineWidthSlider = ({
    ...props
}: HtmlHTMLAttributes<HTMLDivElement>) => {
    const settings = useCanvasSettings();
    const { syncCanvasSettings } = useCanvas();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        syncCanvasSettings({
            ...settings,
            lineWidth: Number(e.target.value),
        });
    };

    return (
        <Slider
            {...props}
            label="Width"
            min={1}
            max={10}
            value={settings.lineWidth}
            onChange={handleChange}
        />
    );
};
