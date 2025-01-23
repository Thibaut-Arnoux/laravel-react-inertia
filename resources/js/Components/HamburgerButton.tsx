import { Cross } from '@/Components/Icons/Cross';
import { Hamburger } from '@/Components/Icons/Hamburger';
import { HtmlHTMLAttributes } from 'react';

export const HamburgerButton = ({
    className = '',
    ...props
}: HtmlHTMLAttributes<HTMLInputElement>) => {
    return (
        <label
            className={
                'btn btn-circle btn-ghost swap swap-rotate btn-sm p-2 ' +
                className
            }
        >
            {/* this hidden checkbox controls the state */}
            <input {...props} className="hidden" type="checkbox" />

            <Hamburger className="swap-off" />

            <Cross className="swap-on" />
        </label>
    );
};
