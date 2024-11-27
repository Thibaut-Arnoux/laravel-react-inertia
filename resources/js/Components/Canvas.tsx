import { useListeners } from '@/hooks/listeners/useListeners';
import { useCanvas } from '@/hooks/useCanvas';
import { useRender } from '@/hooks/useRender';
import { PropsWithChildren, useEffect } from 'react';

export const Canvas = ({ children }: PropsWithChildren) => {
    const { canvasRef } = useCanvas();
    useListeners();
    useRender();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas === null) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, [canvasRef]);

    return (
        <>
            <canvas id="canvas" ref={canvasRef} className="bg-base-100">
                Sorry your browser does not support canvas.
            </canvas>
            {canvasRef.current && children}
        </>
    );
};
