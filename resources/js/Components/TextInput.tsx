import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import {
    InputHTMLAttributes,
    RefObject,
    useEffect,
    useImperativeHandle,
    useRef,
} from 'react';

export default function TextInput({
    type = 'text',
    className = '',
    label,
    errorMessage,
    isFocused = false,
    ref,
    ...props
}: InputHTMLAttributes<HTMLInputElement> & {
    ref?: RefObject<unknown>;
    label?: string;
    errorMessage?: string;
    isFocused?: boolean;
}) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <label className="form-control">
            <InputLabel htmlFor={props.id} value={label} />
            <input
                {...props}
                type={type}
                className={
                    `input input-bordered ${errorMessage && 'input-error'} ` +
                    className
                }
                ref={localRef}
            />
            <InputError message={errorMessage} />
        </label>
    );
}
