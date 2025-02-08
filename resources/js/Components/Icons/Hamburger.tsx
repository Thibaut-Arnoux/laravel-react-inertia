import { SVGProps } from 'react';

export const Hamburger = ({
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
            viewBox="0 0 512 512"
            fill="currentColor"
        >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
    );
};
