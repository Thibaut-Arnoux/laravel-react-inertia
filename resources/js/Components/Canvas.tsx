import { useListeners } from '@/hooks/listeners/useListeners';
import { useCanvas } from '@/hooks/useCanvas';
import { useCursor } from '@/hooks/useCursor';
import { useSynchronization } from '@/hooks/useSynchronization';
import { PropsWithChildren, useEffect } from 'react';

export const Canvas = ({ children }: PropsWithChildren) => {
    const { canvasRef, initialization } = useCanvas();
    useCursor();
    useListeners();
    useSynchronization();

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
