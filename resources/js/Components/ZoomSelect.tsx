import { useCanvasActions, useZoom } from '@/hooks/useCanvasStore';
import { ZoomSettings } from '@/types/canvas';
import { ChangeEvent } from 'react';

export const ZoomSelect = () => {
    const zoom = useZoom();
    const { setZoom } = useCanvasActions();

    const zoomOptions = [
        ZoomSettings.MIN,
        0.5,
        ZoomSettings.DEFAULT,
        2,
        5,
        ZoomSettings.MAX,
    ];

    const zoomPercent = (zoom: number) => (zoom * 100).toFixed(0);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setZoom(Number(e.target.value));
    };

    return (
        <select className="select" value={zoom} onChange={handleChange}>
            {zoomOptions.map((zoomOption) => (
                <option key={zoomOption} value={zoomOption}>
                    {zoomPercent(zoomOption)} %
                </option>
            ))}

            {/* use to display value not included in zoomOptions like 120% */}
            <option className="hidden" value={zoom}>
                {zoomPercent(zoom)} %
            </option>
        </select>
    );
};
