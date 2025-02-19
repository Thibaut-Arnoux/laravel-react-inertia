import { useCanvas } from '@/hooks/useCanvas';
import { PropsWithChildren, useEffect } from 'react';

export const Canvas = ({ children }: PropsWithChildren) => {
    const { canvasRef, initialization } = useCanvas();

    useEffect(() => {
        initialization();
    }, [initialization]);

    return (
        <>
            <canvas id="canvas" ref={canvasRef} className="bg-base-100">
                Sorry your browser does not support canvas.
            </canvas>
            {children}
        </>
    );
};
