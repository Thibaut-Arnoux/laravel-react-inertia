import { HtmlHTMLAttributes, PropsWithChildren, RefObject } from 'react';

export const Modal = ({
    className = '',
    children,
    ref,
    ...props
}: PropsWithChildren<
    HtmlHTMLAttributes<HTMLDivElement> & {
        ref: RefObject<HTMLDialogElement>;
    }
>) => {
    return (
        <dialog ref={ref} className="modal">
            <div {...props} className={'modal-box ' + className}>
                {/* Use to close modal from x button */}
                <form method="dialog">
                    <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                {children}
            </div>

            {/* Use to close modal when clicking outside */}
            <form method="dialog" className="modal-backdrop">
                <button>Hidden</button>
            </form>
        </dialog>
    );
};

const Content = ({
    className = '',
    children,
    ...props
}: PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>) => {
    return (
        <div {...props} className={className}>
            {children}
        </div>
    );
};

const Footer = ({
    className = '',
    children,
    ...props
}: PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>) => {
    return (
        <div {...props} className={'modal-action ' + className}>
            {children}
        </div>
    );
};

Modal.Content = Content;
Modal.Footer = Footer;
