import { Rectangle } from '@/Components/Icons/Rectangle';
import { Triangle } from '@/Components/Icons/Triangle';
import { useCanvas } from '@/hooks/useCanvas';
import { ShapeMode } from '@/types/shape';

export type ShapeButtonProps = {
    shapeButtonMode: ShapeMode;
};

export const ShapeButton = ({ shapeButtonMode }: ShapeButtonProps) => {
    const { shapeMode, setShapeMode } = useCanvas();

    return (
        <button
            className={
                'btn btn-square btn-outline btn-sm rounded-none border-none ' +
                (shapeMode === shapeButtonMode ? 'text-blue-400' : '')
            }
            onClick={() =>
                setShapeMode((shape) =>
                    shape === shapeButtonMode ? null : shapeButtonMode,
                )
            }
        >
            <ShapeIcon shapeButtonMode={shapeButtonMode} />
        </button>
    );
};

const ShapeIcon = ({ shapeButtonMode }: ShapeButtonProps) => {
    switch (shapeButtonMode) {
        case 'rectangle':
            return <Rectangle />;
        case 'triangle':
            return <Triangle />;
        default:
            return <></>;
    }
};
