import { useEffect, useRef } from 'react';

export const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvas = canvasRef.current;

    const handleMouseClick = (e: MouseEvent) => {
        e.stopPropagation();
        console.debug(e);
    };

    useEffect(() => {
        canvas?.addEventListener('click', handleMouseClick);

        return () => {
            canvas?.removeEventListener('click', handleMouseClick);
        };
    }, [canvas]);

    return (
        <>
            <canvas
                id="canvas"
                ref={canvasRef}
                className="h-full w-full bg-cyan-400"
            >
                Sorry your browser does not support canvas.
            </canvas>
        </>
    );
};
