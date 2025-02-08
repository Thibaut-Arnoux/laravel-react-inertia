import { Minus } from '@/Components/Icons/Minus';
import { Plus } from '@/Components/Icons/Plus';
import { useCanvasActions } from '@/hooks/useCanvasStore';

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
            className={`btn btn-square btn-ghost btn-sm`}
            onClick={handleClick}
        >
            <ZoomIcon zoomIn={zoomIn} />
        </button>
    );
};

const ZoomIcon = ({ zoomIn }: ZoomButtonProps) => {
    return zoomIn ? <Plus /> : <Minus />;
};
