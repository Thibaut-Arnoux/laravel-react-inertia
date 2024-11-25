import { useCanvas } from '@/hooks/useCanvas';
import { useEffect } from 'react';

export const Shape = () => {
    const { canvasRef } = useCanvas();

    const handleMouseDown = (e: MouseEvent) => {
        console.debug('canvasRef', canvasRef.current);
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) return;

        ctx.save();
        ctx.strokeRect(e.offsetX, e.offsetY, 100, 100);
        ctx.lineWidth = 2;
        ctx.strokeRect(e.offsetX + 150, e.offsetY, 100, 100);
        ctx.lineWidth = 3;
        ctx.strokeRect(e.offsetX + 300, e.offsetY, 100, 100);
        ctx.lineWidth = 4;
        ctx.strokeRect(e.offsetX + 450, e.offsetY, 100, 100);
        ctx.restore();
    };

    const handleMouseMove = (e: MouseEvent) => {};

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas === null) return;

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mousemove', handleMouseDown);
        };
    }, []);

    return <></>;
};
