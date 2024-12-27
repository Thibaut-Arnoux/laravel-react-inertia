import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';

export default function UpdatePasswordForm({
    className = '',
}: {
    className?: string;
}) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-base-content">
                    Update Password
                </h2>

                <p className="mt-1 text-sm text-base-content text-opacity-80">
                    Ensure your account is using a long, random password to stay
                    secure.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        label="Current Password"
                        value={data.current_password}
                        errorMessage={errors.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        type="password"
                        className="block w-full"
                        autoComplete="current-password"
                    />
                </div>

                <div>
                    <TextInput
                        id="password"
                        ref={passwordInput}
                        label="New Password"
                        value={data.password}
                        errorMessage={errors.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="block w-full"
                        autoComplete="new-password"
                    />
                </div>

                <div>
                    <TextInput
                        id="password_confirmation"
                        label="Confirm Password"
                        value={data.password_confirmation}
                        errorMessage={errors.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        type="password"
                        className="block w-full"
                        autoComplete="new-password"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    {recentlySuccessful && (
                        <p className="text-sm text-base-content text-opacity-70">
                            Saved.
                        </p>
                    )}
                </div>
            </form>
        </section>
    );
}
