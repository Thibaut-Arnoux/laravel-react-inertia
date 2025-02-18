import { HamburgerMenu } from '@/Components/HamburgerMenu';
import { ResetButton } from '@/Components/ResetButton';
import { useCanvas } from '@/hooks/useCanvas';
import { IconButton } from '../IconButton';
import { Back } from '../Icons/Back';
import { Next } from '../Icons/Next';

export const ActionPanel = () => {
    const { undo, redo } = useCanvas();

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
            <IconButton icon={<Back />} onClick={undo} />
            <IconButton icon={<Next />} onClick={redo} />
            <ResetButton />
        </div>
    );
};
