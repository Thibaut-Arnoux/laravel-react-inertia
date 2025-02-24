import { HamburgerMenu } from '@/Components/HamburgerMenu';
import { IconButton } from '@/Components/IconButton';
import { useCanvas } from '@/hooks/useCanvas';
import { useDrawStackActions } from '@/hooks/useDrawStackStore';
import { Redo, RotateCcw, Undo } from 'lucide-react';

export const ActionPanel = () => {
    const { reset } = useCanvas();
    const { undo, redo } = useDrawStackActions();

    const githubLink = import.meta.env.VITE_GITHUB_REPOSITORY;

    return (
        <div className="flex flex-row items-center gap-2 rounded bg-base-200 p-1 shadow">
            <HamburgerMenu className="left-0 top-11">
                <HamburgerMenu.Item closeEnd>
                    <a href={githubLink} target="_blank" rel="noreferrer">
                        About
                    </a>
                </HamburgerMenu.Item>
            </HamburgerMenu>
            <IconButton icon={<Undo />} onClick={undo} />
            <IconButton icon={<Redo />} onClick={redo} />
            <IconButton icon={<RotateCcw />} onClick={reset} />
        </div>
    );
};
