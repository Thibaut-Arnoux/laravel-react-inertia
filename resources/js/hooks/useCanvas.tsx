import { CanvasContext } from '@/providers/canvasProvider';
import { useContext } from 'react';

export const useCanvas = () => {
    const context = useContext(CanvasContext);
    if (context === null) {
        throw new Error('useCanvas must be used within a CanvasProvider');
    }

    return context;
};
