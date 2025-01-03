import { useEffect } from 'react';
import { useCanvas } from './useCanvas';
import { useDrawMode } from './useCanvasStore';

export const useCursor = () => {
    const { canvasRef } = useCanvas();
    const drawMode = useDrawMode();

    useEffect(() => {
        if (!canvasRef.current) return;
        let cursor = 'default';

        if (drawMode) cursor = 'crosshair';

        canvasRef.current.style.cursor = cursor;
    }, [canvasRef, drawMode]);
};
