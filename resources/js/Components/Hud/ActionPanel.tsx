import { HamburgerMenu } from '@/Components/HamburgerMenu';
import { IconButton } from '@/Components/IconButton';
import { useCanvas } from '@/hooks/useCanvas';
import {
    useDrawStack,
    useDrawStackActions,
    useDrawStackTemp,
} from '@/hooks/useDrawStackStore';
import { Redo, RotateCcw, Undo } from 'lucide-react';

export const ActionPanel = () => {
    const drawStack = useDrawStack();
    const drawStackTemp = useDrawStackTemp();
    const { reset } = useCanvas();
    const { undo, redo } = useDrawStackActions();

    const githubLink = import.meta.env.VITE_GITHUB_REPOSITORY;

    return (
        <div className="flex flex-row items-center gap-2 rounded bg-base-200 p-1 shadow">
            <HamburgerMenu className="left-0 top-12">
                <HamburgerMenu.Item closeEnd>
                    <a href={githubLink} target="_blank" rel="noreferrer">
                        About
                    </a>
                </HamburgerMenu.Item>
            </HamburgerMenu>
            <IconButton
                className="btn-sm"
                icon={<Undo />}
                onClick={undo}
                disabled={drawStack.length === 0}
            />
            <IconButton
                className="btn-sm"
                icon={<Redo />}
                onClick={redo}
                disabled={drawStackTemp.length === 0}
            />
            <IconButton
                className="btn-sm"
                icon={<RotateCcw />}
                onClick={reset}
            />
        </div>
    );
};
