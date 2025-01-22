import { SVGProps } from 'react';

export const Minus = ({
    className = '',
    ...props
}: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path d="M6 12L18 12" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
};
