import { useCanvas } from '@/hooks/useCanvas';
import { useEffect, useRef, useState } from 'react';

type Position = {
    x: number;
    y: number;
};

export const Shape = () => {
    const { canvasRef } = useCanvas();
    const ctx = canvasRef.current?.getContext('2d');

    const startPos = useRef<Position | null>(null);
    const isDrawing = useRef<boolean>(false);

    const handleMouseDown = (e: MouseEvent) => {
        isDrawing.current = true;
        startPos.current = { x: e.offsetX, y: e.offsetY };
    };

    const handleMouseUp = (e: MouseEvent) => {
        isDrawing.current = false;
        startPos.current = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDrawing.current === false|| !startPos.current || !ctx || !canvasRef.current) return;

        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        const {x: startX, y: startY } = startPos.current;
        const endX = e.offsetX;
        const endY = e.offsetY;

        // Calculate width and height
        let width = Math.abs(endX - startX);
        let height = Math.abs(endY - startY);

        // Determine top-left corner coordinates
        let x = Math.min(startX, endX);
        let y = Math.min(startY, endY);

        // Draw rectangle
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);
        ctx.stroke();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas === null) return;

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mousemove', handleMouseMove);

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener('mousemove', handleMouseDown);
        };
    }, []);

    return <></>;
};
