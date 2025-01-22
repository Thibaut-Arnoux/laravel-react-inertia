import { useCanvasActions } from '@/hooks/useCanvasStore';
import { Minus } from './Icons/Minus';
import { Plus } from './Icons/Plus';

type ZoomButtonProps = {
    zoomIn: boolean;
};

export const ZoomButton = ({ zoomIn }: ZoomButtonProps) => {
    const { zoomIn: zoomInAction, zoomOut } = useCanvasActions();

    const handleClick = () => {
        if (zoomIn) {
            zoomInAction();
        } else {
            zoomOut();
        }
    };

    return (
        <button
            className={`btn btn-square btn-outline btn-sm border-none`}
            onClick={handleClick}
        >
            <ZoomIcon zoomIn={zoomIn} />
        </button>
    );
};

const ZoomIcon = ({ zoomIn }: ZoomButtonProps) => {
    return zoomIn ? <Plus /> : <Minus />;
};
