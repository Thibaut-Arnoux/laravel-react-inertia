import { Line } from '@/Components/Icons/Line';
import { Rectangle } from '@/Components/Icons/Rectangle';
import { RightTriangle } from '@/Components/Icons/RightTriangle';
import { Triangle } from '@/Components/Icons/Triangle';
import { useCanvasActions, useShapeMode } from '@/hooks/useCanvasStore';
import { ShapeMode } from '@/types/shape';

export type ShapeButtonProps = {
    shapeButtonMode: ShapeMode;
};

export const ShapeButton = ({ shapeButtonMode }: ShapeButtonProps) => {
    const shapeMode = useShapeMode();
    const { setShapeMode } = useCanvasActions();

    return (
        <button
            className={
                'btn btn-square btn-outline btn-sm rounded-none border-none ' +
                (shapeMode === shapeButtonMode ? 'text-blue-400' : '')
            }
            onClick={() =>
                setShapeMode(
                    shapeMode === shapeButtonMode ? null : shapeButtonMode,
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
        case 'rightTriangle':
            return <RightTriangle />;
        case 'line':
            return <Line />;
        default:
            return <></>;
    }
};
