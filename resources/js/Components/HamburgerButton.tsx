import { Cross } from '@/Components/Icons/Cross';
import { Hamburger } from '@/Components/Icons/Hamburger';
import { HtmlHTMLAttributes, RefObject } from 'react';

export const HamburgerButton = ({
    className = '',
    ref,
    ...props
}: HtmlHTMLAttributes<HTMLInputElement> & {
    ref?: RefObject<HTMLInputElement>;
}) => {
    return (
        <label
            className={
                'btn btn-square btn-ghost swap swap-rotate btn-sm p-2 ' +
                className
            }
        >
            {/* this hidden checkbox controls the state */}
            <input ref={ref} {...props} className="hidden" type="checkbox" />

            <Hamburger className="swap-off" />

            <Cross className="swap-on" />
        </label>
    );
};
