import { useCanvas } from '@/hooks/useCanvas';
import { useCanvasSettings } from '@/hooks/useCanvasStore';
import { ChangeEvent, HtmlHTMLAttributes } from 'react';

export const Slider = ({
    label,
    className = '',
    ...props
}: HtmlHTMLAttributes<HTMLDivElement> & { label?: string }) => {
    const settings = useCanvasSettings();
    const { syncCanvasSettings } = useCanvas();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        syncCanvasSettings({
            ...settings,
            lineWidth: Number(e.target.value),
        });
    };

    return (
        <div {...props} className={'flex flex-row items-center ' + className}>
            {label && <span className="mr-2">{label}</span>}
            <input
                type="range"
                min={1}
                max={10}
                value={settings.lineWidth}
                onChange={handleChange}
                className="range range-xs w-full"
            />
        </div>
    );
};
