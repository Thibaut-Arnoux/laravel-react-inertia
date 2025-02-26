import { IDrawable } from '@/classes/IDrawable';
import Checkbox from '@/Components/Checkbox';
import { IconButton } from '@/Components/IconButton';
import { useDrawStack } from '@/hooks/useDrawStackStore';
import { ArrowDownToLine, ArrowUpToLine, Trash2 } from 'lucide-react';
import { useState } from 'react';

export const DrawStackPanel = () => {
    const drawStack = useDrawStack();

    return (
        <ul className="menu menu-sm w-56 gap-1 rounded-box bg-base-200 shadow">
            <li className="menu-title">DrawStack</li>
            {drawStack.length > 0 && (
                <>
                    <div className="flex flex-row items-center justify-between px-3">
                        <Checkbox />
                        <IconButton
                            className="btn-xs"
                            icon={<Trash2 size={16} />}
                        />
                    </div>
                    <hr />
                    {drawStack.map((drawable, index) => (
                        <DrawStackItem key={index} drawable={drawable} />
                    ))}
                </>
            )}
        </ul>
    );
};

const DrawStackItem = ({ drawable }: { drawable: IDrawable }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex h-8 flex-row items-center"
        >
            <li className="w-full">
                <a>
                    <Checkbox />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {drawable.constructor.name}
                    </span>
                    {isHovered && (
                        <div className="flex flex-row gap-1">
                            <IconButton
                                className="btn-xs"
                                icon={<ArrowUpToLine size={16} />}
                            />
                            <IconButton
                                className="btn-xs"
                                icon={<ArrowDownToLine size={16} />}
                            />
                            <IconButton
                                className="btn-xs"
                                icon={<Trash2 size={16} />}
                            />
                        </div>
                    )}
                </a>
            </li>
        </div>
    );
};
