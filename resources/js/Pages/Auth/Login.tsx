import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-success">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <TextInput
                        id="email"
                        type="email"
                        label="Email"
                        name="email"
                        value={data.email}
                        errorMessage={errors.email}
                        className="block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        id="password"
                        type="password"
                        label="Password"
                        name="password"
                        value={data.password}
                        errorMessage={errors.password}
                        className="block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-base-content text-opacity-80">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <Link
                        href={route('register')}
                        className="rounded-md text-sm text-base-content text-opacity-80 underline hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        Register
                    </Link>
                    <div>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="rounded-md text-sm text-base-content text-opacity-80 underline hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
