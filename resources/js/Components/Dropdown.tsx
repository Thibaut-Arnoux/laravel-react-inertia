import { Link as InertiaLink, InertiaLinkProps } from '@inertiajs/react';
import { HtmlHTMLAttributes, PropsWithChildren } from 'react';

export const Dropdown = ({
    label,
    className = '',
    children,
    ...props
}: PropsWithChildren<
    HtmlHTMLAttributes<HTMLDetailsElement> & {
        label: string;
    }
>) => {
    return (
        <details {...props} className={'dropdown ' + className}>
            <summary className="btn btn-ghost font-medium">
                {label}
                <svg
                    className="-me-0.5 ms-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </summary>
            {children}
        </details>
    );
};

const Content = ({
    className = '',
    children,
    ...props
}: PropsWithChildren<HtmlHTMLAttributes<HTMLUListElement>>) => {
    return (
        <ul
            {...props}
            className={
                'menu dropdown-content z-[1] rounded-box bg-base-100 p-2 shadow ' +
                className
            }
        >
            {children}
        </ul>
    );
};

const Link = ({ className = '', children, ...props }: InertiaLinkProps) => {
    return (
        <li>
            <InertiaLink {...props} className={className}>
                {children}
            </InertiaLink>
        </li>
    );
};

Dropdown.Content = Content;
Dropdown.Link = Link;
