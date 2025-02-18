import { ButtonHTMLAttributes, ReactNode } from 'react';

export const IconButton = ({
    className = '',
    icon,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { icon: ReactNode }) => {
    return (
        <button
            {...props}
            className={`btn btn-square btn-ghost btn-sm ` + className}
        >
            {icon}
        </button>
    );
};
