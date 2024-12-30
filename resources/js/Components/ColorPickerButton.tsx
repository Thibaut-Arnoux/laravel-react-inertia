import { useCanvas } from '@/hooks/useCanvas';
import { useCanvasSettings } from '@/hooks/useCanvasStore';
import { ChangeEvent, useRef } from 'react';

export const ColorPickerButton = () => {
    const isUpdated = useRef(false);
    const colorPicker = useRef<HTMLInputElement | null>(null);

    const settings = useCanvasSettings();
    const { syncCanvasSettings } = useCanvas();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        isUpdated.current = true;
        syncCanvasSettings({
            ...settings,
            strokeStyle: e.target.value,
        });
    };

    return (
        <div className="btn btn-circle btn-ghost btn-sm relative">
            <div
                style={
                    isUpdated.current
                        ? {
                              background: settings.strokeStyle.toString(),
                          }
                        : {}
                }
                className={`relative h-5 w-5 rounded-full ${!isUpdated.current && 'bg-[linear-gradient(217deg,rgba(255,0,0,.8),rgba(255,0,0,0)_70.71%),linear-gradient(127deg,rgba(0,255,0,.8),rgba(0,255,0,0)_70.71%),linear-gradient(336deg,rgba(0,0,255,.8),rgba(0,0,255,0)_70.71%)]'}`}
                onClick={() => colorPicker.current?.click()}
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
