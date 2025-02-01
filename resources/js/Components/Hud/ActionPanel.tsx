import { useState } from 'react';
import { HamburgerButton } from '../HamburgerButton';
import { ResetButton } from '../ResetButton';

export const ActionPanel = () => {
    const [open, setOpen] = useState(false);

    const githubLink = import.meta.env.VITE_GITHUB_REPOSITORY;

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-2 rounded bg-base-200 p-1 shadow">
                <HamburgerButton onClick={() => setOpen(!open)} />
                <ResetButton />
            </div>

            {open && (
                <ul className="menu absolute top-11 rounded bg-base-200 shadow">
                    <li>
                        <a href={githubLink} target="_blank" rel="noreferrer">
                            About
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
};
