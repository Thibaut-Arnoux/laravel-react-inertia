import { useListeners } from '@/hooks/listeners/useListeners';
import { useCanvas } from '@/hooks/useCanvas';
import { useCursor } from '@/hooks/useCursor';
import { PropsWithChildren, useEffect } from 'react';

export const Canvas = ({ children }: PropsWithChildren) => {
    const { canvasRef, initCanvasSettings } = useCanvas();
    useCursor();
    useListeners();

    useEffect(() => {
        initCanvasSettings();
    }, [initCanvasSettings]);

    return (
        <>
            <canvas id="canvas" ref={canvasRef} className="bg-base-100">
                Sorry your browser does not support canvas.
            </canvas>
            {children}
        </>
    );
};
