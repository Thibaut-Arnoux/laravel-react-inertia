import { Menu, X } from 'lucide-react';
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

            <Menu className="swap-off" />

            <X className="swap-on" />
        </label>
    );
};
