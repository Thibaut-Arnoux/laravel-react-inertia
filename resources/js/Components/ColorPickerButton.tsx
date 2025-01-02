import { useCanvas } from '@/hooks/useCanvas';
import { useCanvasSettings } from '@/hooks/useCanvasStore';
import { ChangeEvent, useRef, useState } from 'react';

export const ColorPickerButton = () => {
    const [color, setColor] = useState<string | null>(null);
    const colorPicker = useRef<HTMLInputElement | null>(null);

    const settings = useCanvasSettings();
    const { syncCanvasSettings } = useCanvas();

    const isActive = settings.strokeStyle === color;

    const handleClick = () => {
        if (color) {
            syncCanvasSettings({
                ...settings,
                strokeStyle: color,
                fillStyle: color,
            });
        }

        colorPicker.current?.click();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
        syncCanvasSettings({
            ...settings,
            strokeStyle: e.target.value,
            fillStyle: e.target.value,
        });
    };

    return (
        <div
            className={`btn btn-circle btn-ghost btn-sm relative ${isActive && 'btn-active'} `}
        >
            <div
                style={{
                    ...(color && { background: color }),
                }}
                className={`relative h-5 w-5 rounded-full ${!color && 'bg-[linear-gradient(217deg,rgba(255,0,0,.8),rgba(255,0,0,0)_70.71%),linear-gradient(127deg,rgba(0,255,0,.8),rgba(0,255,0,0)_70.71%),linear-gradient(336deg,rgba(0,0,255,.8),rgba(0,0,255,0)_70.71%)]'}`}
                onClick={handleClick}
            ></div>
            <input
                id="colorPicker"
                ref={colorPicker}
                type="color"
                className="absolute bottom-0 left-0 h-0 w-0"
                onChange={handleChange}
            />
        </div>
    );
};
