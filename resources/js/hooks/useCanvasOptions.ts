import { useCanvasActions } from '@/hooks/useCanvasStore';
import { MutableRefObject } from 'react';

export type CanvasOptions = {
    initCanvasOptions: () => void;
    setCanvasLineWidth: (width: number) => void;
};

export const useCanvasOptions = (
    canvasRef: MutableRefObject<HTMLCanvasElement | null>,
) => {
    const ctx = canvasRef.current?.getContext('2d');
    const { setLineWidth } = useCanvasActions();

    const initCanvasOptions = () => {
        if (!ctx || !canvasRef.current) return;

        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;

        ctx.lineWidth = 2;
        ctx.save();
    };

    const setCanvasLineWidth = (width: number) => {
        if (!ctx) return;

        ctx.lineWidth = width;
        setLineWidth(width);
    };

    return {
        initCanvasOptions,
        setCanvasLineWidth,
    };
};
