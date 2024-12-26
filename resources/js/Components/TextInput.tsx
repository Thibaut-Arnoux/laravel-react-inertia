import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import {
    forwardRef,
    InputHTMLAttributes,
    useEffect,
    useImperativeHandle,
    useRef,
} from 'react';

export default forwardRef(function TextInput(
    {
        type = 'text',
        className = '',
        label,
        errorMessage,
        isFocused = false,
        ...props
    }: InputHTMLAttributes<HTMLInputElement> & {
        label?: string;
        errorMessage?: string;
        isFocused?: boolean;
    },
    ref,
) {
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
});
