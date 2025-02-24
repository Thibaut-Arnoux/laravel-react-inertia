import { useCanvasActions, useCanvasSettings } from '@/hooks/useCanvasStore';
import { HtmlHTMLAttributes } from 'react';

export const ColorButton = ({
    color,
    className = '',
    ...props
}: HtmlHTMLAttributes<HTMLDivElement> & { color: string }) => {
    const settings = useCanvasSettings();
    const { setCanvasSettings } = useCanvasActions();

    const isActive = settings.strokeStyle === color;

    const handleClick = () => {
        setCanvasSettings({
            ...settings,
            strokeStyle: color,
            fillStyle: color,
        });
    };

    return (
        <div
            className={`btn btn-circle btn-ghost btn-sm ${isActive && 'btn-active'} `}
        >
            <div
                {...props}
                style={{ background: color }}
                className={'h-5 w-5 rounded-full ' + className}
                onClick={handleClick}
            ></div>
        </div>
    );
};
