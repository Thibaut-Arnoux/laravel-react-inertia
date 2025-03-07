import Checkbox from '@/Components/Checkbox';
import { IconButton } from '@/Components/IconButton';
import { useDrawStack, useDrawStackActions } from '@/hooks/useDrawStackStore';
import { IDrawStackItem } from '@/types/canvas';
import { ArrowDownToLine, ArrowUpToLine, Trash2 } from 'lucide-react';
import { useState } from 'react';

export const DrawStackPanel = () => {
    const drawStack = useDrawStack();
    const { setSelectedDrawStackItems, removeDrawStackItems } =
        useDrawStackActions();

    const isGlobalChecked = drawStack.every(
        (drawStackItem) => drawStackItem.selected,
    );
    const isTrashDisabled = drawStack.every(
        (drawStackItem) => !drawStackItem.selected,
    );

    return (
        <ul className="menu menu-sm w-56 gap-1 rounded-box bg-base-200 shadow">
            <li className="menu-title">DrawStack</li>
            {drawStack.length > 0 && (
                <>
                    <div className="flex flex-row items-center justify-between px-3">
                        <Checkbox
                            checked={isGlobalChecked}
                            onChange={() =>
                                setSelectedDrawStackItems(!isGlobalChecked)
                            }
                        />
                        <IconButton
                            className="btn-xs"
                            icon={<Trash2 size={16} />}
                            onClick={removeDrawStackItems}
                            disabled={isTrashDisabled}
                        />
                    </div>
                    <div className="divider m-0 h-1"></div>
                    {drawStack.map((drawStackItem) => (
                        <DrawStackItem
                            key={drawStackItem.id}
                            drawStackItem={drawStackItem}
                        />
                    ))}
                </>
            )}
        </ul>
    );
};

const DrawStackItem = ({
    drawStackItem,
}: {
    drawStackItem: IDrawStackItem;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const {
        toggleDrawStackItem,
        removeDrawStackItem,
        upDrawStackItem,
        downDrawStackItem,
    } = useDrawStackActions();

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex h-8 flex-row items-center"
        >
            <li className="w-full">
                <a>
                    <Checkbox
                        checked={drawStackItem.selected}
                        onChange={() => {
                            toggleDrawStackItem(drawStackItem.id);
                        }}
                    />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {drawStackItem.name}
                    </span>
                    {isHovered && (
                        <div className="flex flex-row gap-1">
                            <IconButton
                                className="btn-xs"
                                icon={<ArrowUpToLine size={16} />}
                                onClick={() =>
                                    upDrawStackItem(drawStackItem.id)
                                }
                            />
                            <IconButton
                                className="btn-xs"
                                icon={<ArrowDownToLine size={16} />}
                                onClick={() =>
                                    downDrawStackItem(drawStackItem.id)
                                }
                            />
                            <IconButton
                                className="btn-xs"
                                icon={<Trash2 size={16} />}
                                onClick={() =>
                                    removeDrawStackItem(drawStackItem.id)
                                }
                            />
                        </div>
                    )}
                </a>
            </li>
        </div>
    );
};
