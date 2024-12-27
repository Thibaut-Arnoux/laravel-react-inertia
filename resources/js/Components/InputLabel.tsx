import { LabelHTMLAttributes } from 'react';

export default function InputLabel({
    value,
    className = '',
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return value ? (
        <div className="label">
            <label
                {...props}
                className={
                    `block text-sm font-medium text-base-content text-opacity-90 ` +
                    className
                }
            >
                {value}
            </label>
        </div>
    ) : null;
}
