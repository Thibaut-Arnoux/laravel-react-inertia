import { isDrawableMode, ModeEnum } from '@/enums/mode';
import { useCanvas } from '@/hooks/useCanvas';
import { useIsDrawing, useMode } from '@/hooks/useCanvasStore';
import { useEffect } from 'react';

export const useCursor = () => {
    const { canvasRef } = useCanvas();
    const mode = useMode();
    const isDrawing = useIsDrawing();

    useEffect(() => {
        if (!canvasRef.current) return;
        let cursor = 'default';

        if (isDrawableMode(mode)) cursor = 'crosshair';
        else if (mode === ModeEnum.DRAGGABLE && !isDrawing) cursor = 'grab';
        else if (mode === ModeEnum.DRAGGABLE && isDrawing) cursor = 'grabbing';

        canvasRef.current.style.cursor = cursor;
    }, [canvasRef, mode, isDrawing]);
};
