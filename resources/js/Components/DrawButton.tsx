import { Line } from '@/Components/Icons/Line';
import { Pen } from '@/Components/Icons/Pen';
import { Rectangle } from '@/Components/Icons/Rectangle';
import { RightTriangle } from '@/Components/Icons/RightTriangle';
import { Triangle } from '@/Components/Icons/Triangle';
import { useCanvasActions, useDrawMode } from '@/hooks/useCanvasStore';
import { DrawMode } from '@/types/draw';

export type DrawButtonProps = {
    drawButtonMode: DrawMode;
};

export const DrawButton = ({ drawButtonMode }: DrawButtonProps) => {
    const drawMode = useDrawMode();
    const { setDrawMode } = useCanvasActions();

    return (
        <button
            className={
                'btn btn-square btn-outline btn-sm rounded-none border-none ' +
                (drawMode === drawButtonMode ? 'text-primary' : '')
            }
            onClick={() =>
                setDrawMode(drawMode === drawButtonMode ? null : drawButtonMode)
            }
        >
            <DrawIcon drawButtonMode={drawButtonMode} />
        </button>
    );
};

const DrawIcon = ({ drawButtonMode }: DrawButtonProps) => {
    switch (drawButtonMode) {
        case 'rectangle':
            return <Rectangle />;
        case 'triangle':
            return <Triangle />;
        case 'rightTriangle':
            return <RightTriangle />;
        case 'line':
            return <Line />;
        case 'pen':
            return <Pen />;
        default:
            return <></>;
    }
};
