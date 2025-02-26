import { IconButton } from '@/Components/IconButton';
import { useCanvasActions } from '@/hooks/useCanvasStore';
import { Minus, Plus } from 'lucide-react';

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
        <IconButton
            className="btn-sm"
            icon={<ZoomIcon zoomIn={zoomIn} />}
            onClick={handleClick}
        />
    );
};

const ZoomIcon = ({ zoomIn }: ZoomButtonProps) => {
    return zoomIn ? <Plus /> : <Minus />;
};
