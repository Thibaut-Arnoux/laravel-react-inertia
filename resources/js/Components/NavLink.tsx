import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 text-base-content focus:border-primary focus:outline-none ' +
                (active
                    ? 'border-primary'
                    : 'border-transparent opacity-80 hover:border-primary hover:text-base-content hover:opacity-100 focus:text-base-content focus:opacity-100') +
                className
            }
        >
            {children}
        </Link>
    );
}
