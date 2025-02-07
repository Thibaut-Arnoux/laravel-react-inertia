import {
    createContext,
    HtmlHTMLAttributes,
    PropsWithChildren,
    RefObject,
    useContext,
    useRef,
    useState,
} from 'react';
import { HamburgerButton } from './HamburgerButton';

type HamburgerMenuContextProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    menuRef: RefObject<HTMLInputElement | null>;
};

const HamburgerMenuContext = createContext<HamburgerMenuContextProps | null>(
    null,
);

const useHamburgerMenu = () => {
    const context = useContext(HamburgerMenuContext);

    if (context === null) {
        throw new Error(
            'useHamburgerMenu must be used within a HamburgerMenuProvider',
        );
    }

    return context;
};

export const HamburgerMenu = ({
    className = '',
    children,
    ...props
}: PropsWithChildren<HtmlHTMLAttributes<HTMLUListElement>>) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLInputElement | null>(null);

    return (
        <HamburgerMenuContext.Provider value={{ open, setOpen, menuRef: ref }}>
            <HamburgerButton
                ref={ref}
                className="relative"
                onClick={() => setOpen(!open)}
            />
            {open && (
                <ul
                    {...props}
                    className={
                        'menu absolute top-9 rounded bg-base-200 shadow ' +
                        className
                    }
                >
                    {children}
                </ul>
            )}
        </HamburgerMenuContext.Provider>
    );
};

const Item = ({
    children,
    closeEnd = false,
}: PropsWithChildren<{ closeEnd?: boolean }>) => {
    const { setOpen, menuRef } = useHamburgerMenu();

    return (
        <li
            onClick={() => {
                if (closeEnd) {
                    setOpen(false);
                    menuRef.current?.click(); // swap icon
                }
            }}
        >
            {children}
        </li>
    );
};

HamburgerMenu.Item = Item;
