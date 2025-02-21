import { ModeEnum } from '@/enums/mode';
import { useCanvasActions, useMode } from '@/hooks/useCanvasStore';
import { Mode } from '@/types/mode';
import {
    Grab,
    Pen,
    PenLine,
    Square,
    Triangle,
    TriangleRight,
} from 'lucide-react';

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
            className={`btn btn-square btn-ghost btn-sm ${isActive && 'text-primary'} `}
            onClick={handleClick}
        >
            <ModeIcon modeButton={modeButton} />
        </button>
    );
};

const ModeIcon = ({ modeButton }: ModeButtonProps) => {
    switch (modeButton) {
        case ModeEnum.RECTANGLE:
            return <Square />;
        case ModeEnum.TRIANGLE:
            return <Triangle />;
        case ModeEnum.RIGHT_TRIANGLE:
            return <TriangleRight />;
        case ModeEnum.LINE:
            return <PenLine />;
        case ModeEnum.PEN:
            return <Pen size={21} />;
        case ModeEnum.DRAGGABLE:
            return <Grab />;
        default:
            return <></>;
    }
};
