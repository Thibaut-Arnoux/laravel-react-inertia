import { Slider } from '@/Components/Slider';
import { useCanvasActions, useCanvasSettings } from '@/hooks/useCanvasStore';
import { ChangeEvent, HtmlHTMLAttributes } from 'react';

export const LineWidthSlider = ({
    ...props
}: HtmlHTMLAttributes<HTMLDivElement>) => {
    const settings = useCanvasSettings();
    const { setCanvasSettings } = useCanvasActions();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCanvasSettings({
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
