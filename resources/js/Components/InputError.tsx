import { HTMLAttributes } from 'react';

export default function InputError({
    message,
    className = '',
    ...props
}: HTMLAttributes<HTMLSpanElement> & { message?: string }) {
    return message ? (
        <div className="label">
            <span
                {...props}
                className={'label-text-alt text-error ' + className}
            >
                {message}
            </span>
        </div>
    ) : null;
}
