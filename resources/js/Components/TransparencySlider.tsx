import { Slider } from '@/Components/Slider';
import { useCanvas } from '@/hooks/useCanvas';
import { useCanvasSettings } from '@/hooks/useCanvasStore';
import { CanvasDefaultSettings } from '@/types/canvas';
import { ChangeEvent, HtmlHTMLAttributes } from 'react';

export const TransparencySlider = ({
    ...props
}: HtmlHTMLAttributes<HTMLDivElement>) => {
    const settings = useCanvasSettings();
    const { syncCanvasSettings } = useCanvas();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        syncCanvasSettings({
            ...settings,
            transparency: Number(e.target.value),
        });
    };

    return (
        <Slider
            {...props}
            min={0}
            max={CanvasDefaultSettings.TRANSPARENCY}
            value={settings.transparency}
            onChange={handleChange}
        />
    );
};
