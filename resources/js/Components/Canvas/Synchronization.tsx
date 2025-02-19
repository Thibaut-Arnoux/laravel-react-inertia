import { useCanvas } from '@/hooks/useCanvas';
import { useCanvasSettings, useZoom } from '@/hooks/useCanvasStore';
import { useEffect } from 'react';

export const Synchronization = () => {
    const zoom = useZoom();
    const canvasSettings = useCanvasSettings();
    const { zoom: zoomCanvas, setSettings } = useCanvas();

    /**
     * Sync canvas on zoom events
     */
    useEffect(() => {
        zoomCanvas(zoom);
    }, [zoom, zoomCanvas]);

    /**
     * Sync canvas on settings events
     */
    useEffect(() => {
        setSettings(canvasSettings);
    }, [canvasSettings, setSettings]);

    return <></>;
};
