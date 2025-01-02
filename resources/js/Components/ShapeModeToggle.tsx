import { ShapeModeEnum } from '@/enums/shape';
import { useCanvasActions, useShapeMode } from '@/hooks/useCanvasStore';
import { HtmlHTMLAttributes } from 'react';

export const ShapeModeToggle = ({
    className = '',
    ...props
}: HtmlHTMLAttributes<HTMLDivElement>) => {
    const shapeMode = useShapeMode();
    const { toogleShapeMode, setShapeMode } = useCanvasActions();

    return (
        <div
            {...props}
            className={'flex flex-row items-center gap-2 ' + className}
        >
            <span
                className="cursor-pointer"
                onClick={() => setShapeMode(ShapeModeEnum.STROKE)}
            >
                Stroke
            </span>
            <input
                type="checkbox"
                className="toggle toggle-xs border-base-content bg-base-content hover:bg-base-content"
                onChange={toogleShapeMode}
                checked={shapeMode === ShapeModeEnum.FILL}
            />
            <span
                className="cursor-pointer"
                onClick={() => setShapeMode(ShapeModeEnum.FILL)}
            >
                Fill
            </span>
        </div>
    );
};
