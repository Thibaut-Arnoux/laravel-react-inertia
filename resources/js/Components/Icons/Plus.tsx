import { SVGProps } from 'react';

export const Plus = ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path d="M6 12H18M12 6V18" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
};
