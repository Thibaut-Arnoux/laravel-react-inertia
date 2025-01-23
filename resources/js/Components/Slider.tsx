import { ChangeEvent, HtmlHTMLAttributes } from 'react';

type SliderProps = {
    label?: string;
    min: number;
    max: number;
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Slider = ({
    label,
    min = 0,
    max = 100,
    value,
    className = '',
    onChange,
    ...props
}: HtmlHTMLAttributes<HTMLDivElement> & SliderProps) => {
    return (
        <div {...props} className={'flex flex-row items-center ' + className}>
            {label && <span className="mr-2 text-base-content">{label}</span>}
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={onChange}
                className="range range-xs w-full"
            />
        </div>
    );
};
