import { useZoom } from '@/hooks/useCanvasStore';
import { ZoomButton } from '../ZoomButton';

export const ZoomPanel = () => {
    const zoom = useZoom();
    const zoomPercent = (zoom * 100).toFixed(0);

    return (
        <div className="flex flex-row gap-2 rounded bg-base-200 p-1 shadow">
            <ZoomButton zoomIn={false} />
            <span className="flex items-center text-base-content">
                {zoomPercent} %
            </span>
            <ZoomButton zoomIn={true} />
        </div>
    );
};
