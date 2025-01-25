import { ZoomSelect } from '@/Components//ZoomSelect';
import { ZoomButton } from '@/Components/ZoomButton';

export const ZoomPanel = () => {
    return (
        <div className="flex flex-row items-center gap-2 rounded bg-base-200 p-1 shadow">
            <ZoomButton zoomIn={false} />
            <ZoomSelect />
            <ZoomButton zoomIn={true} />
        </div>
    );
};
