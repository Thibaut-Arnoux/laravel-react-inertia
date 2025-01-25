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
            {/* use to display value not included in zoomOptions like 120% */}
            <option disabled key={zoom} value={zoom}>
                {zoomPercent(zoom)} %
            </option>

            {zoomOptions.map((zoomOption) => (
                <option key={zoomOption} value={zoomOption}>
                    {zoomPercent(zoomOption)} %
                </option>
            ))}
        </select>
    );
};
