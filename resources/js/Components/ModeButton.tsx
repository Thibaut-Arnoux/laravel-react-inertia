import { HandGrab } from '@/Components/Icons/HandGrab';
import { Line } from '@/Components/Icons/Line';
import { Pen } from '@/Components/Icons/Pen';
import { Rectangle } from '@/Components/Icons/Rectangle';
import { RightTriangle } from '@/Components/Icons/RightTriangle';
import { Triangle } from '@/Components/Icons/Triangle';
import { ModeEnum } from '@/enums/mode';
import { useCanvasActions, useMode } from '@/hooks/useCanvasStore';
import { Mode } from '@/types/mode';

export type ModeButtonProps = {
    modeButton: Mode;
};

export const ModeButton = ({ modeButton }: ModeButtonProps) => {
    const mode = useMode();
    const { setMode } = useCanvasActions();

    const isActive = mode === modeButton;

    const handleClick = () => {
        setMode(modeButton);
    };

    return (
        <button
            className={`btn btn-square btn-outline btn-sm rounded-none border-none ${isActive && 'text-primary'} `}
            onClick={handleClick}
        >
            <ModeIcon modeButton={modeButton} />
        </button>
    );
};

const ModeIcon = ({ modeButton }: ModeButtonProps) => {
    switch (modeButton) {
        case ModeEnum.RECTANGLE:
            return <Rectangle />;
        case ModeEnum.TRIANGLE:
            return <Triangle />;
        case ModeEnum.RIGHT_TRIANGLE:
            return <RightTriangle />;
        case ModeEnum.LINE:
            return <Line />;
        case ModeEnum.PEN:
            return <Pen />;
        case ModeEnum.DRAGGABLE:
            return <HandGrab />;
        default:
            return <></>;
    }
};
