import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={`flex w-full items-start border-l-4 py-2 pe-4 ps-3 text-base-content ${
                active
                    ? 'border-primary bg-primary bg-opacity-10 focus:border-primary focus:bg-primary focus:bg-opacity-20'
                    : 'border-transparent opacity-80 hover:border-primary hover:bg-primary hover:bg-opacity-10 hover:text-base-content hover:opacity-100 focus:border-primary focus:bg-primary focus:bg-opacity-10 focus:text-base-content focus:opacity-100'
            } text-base font-medium focus:outline-none ${className}`}
        >
            {children}
        </Link>
    );
}
