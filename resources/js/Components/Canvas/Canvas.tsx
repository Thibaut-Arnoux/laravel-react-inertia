import { useMouseDown } from '@/hooks/listeners/useMouseDown';
import { useMouseMove } from '@/hooks/listeners/useMouseMove';
import { useMouseUp } from '@/hooks/listeners/useMouseUp';
import { useCanvas } from '@/hooks/useCanvas';
import { PropsWithChildren, useEffect } from 'react';

export const Canvas = ({ children }: PropsWithChildren) => {
    const { canvasRef } = useCanvas();

    // listeners
    useMouseDown();
    useMouseUp();
    useMouseMove();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas === null) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, []);

    return (
        <>
            <canvas id="canvas" ref={canvasRef} className="bg-base-100">
                Sorry your browser does not support canvas.
            </canvas>
            {canvasRef.current && children}
        </>
    );
};
