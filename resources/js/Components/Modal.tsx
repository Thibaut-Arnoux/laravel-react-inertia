import { forwardRef, HtmlHTMLAttributes, PropsWithChildren } from 'react';

export const Modal = forwardRef<
    HTMLDialogElement,
    PropsWithChildren<
        HtmlHTMLAttributes<HTMLDivElement> & { onClose: () => void }
    >
>(function Modal(
    {
        onClose,
        className = '',
        children,
        ...props
    }: PropsWithChildren<
        HtmlHTMLAttributes<HTMLDivElement> & { onClose: () => void }
    >,
    ref,
) {
    return (
        <dialog ref={ref} className="modal">
            <div {...props} className={'modal-box ' + className}>
                {/* Use to close modal from x button */}
                <form method="dialog" onSubmit={onClose}>
                    <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                {children}
            </div>

            {/* Use to close modal when clicking outside */}
            <form method="dialog" onSubmit={onClose} className="modal-backdrop">
                <button>Hidden</button>
            </form>
        </dialog>
    );
});

export const ModalContent = ({
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

export const ModalFooter = ({
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

// could be used in react 19, by migrating forward ref
// Modal.Content = Content;
// Modal.Footer = Footer;
