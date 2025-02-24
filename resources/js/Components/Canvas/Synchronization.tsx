import { useCanvas } from '@/hooks/useCanvas';
import { useCanvasSettings, useZoom } from '@/hooks/useCanvasStore';
import { useDrawStack } from '@/hooks/useDrawStackStore';
import { useEffect } from 'react';

export const Synchronization = () => {
    const zoom = useZoom();
    const canvasSettings = useCanvasSettings();
    const { zoom: zoomCanvas, setSettings, redraw } = useCanvas();
    const drawStack = useDrawStack();

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

    /**
     * Redraw on drawStack events
     */
    useEffect(() => {
        redraw();
    }, [drawStack, redraw]);

    return <></>;
};
