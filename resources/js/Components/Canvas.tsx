import { useMouseDown } from '@/hooks/listeners/useMouseDown';
import { useMouseMove } from '@/hooks/listeners/useMouseMove';
import { useMouseUp } from '@/hooks/listeners/useMouseUp';
import { useCanvas } from '@/hooks/useCanvas';
import { useRender } from '@/hooks/useRender';
import { PropsWithChildren, useEffect } from 'react';

export const Canvas = ({ children }: PropsWithChildren) => {
    const { canvasRef } = useCanvas();

    // listeners
    useMouseDown();
    useMouseUp();
    useMouseMove();

    // render
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
