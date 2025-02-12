import DangerButton from '@/Components/DangerButton';
import { Modal } from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';

export default function DeleteUserForm({
    className = '',
}: {
    className?: string;
}) {
    const modalRef = useRef<HTMLDialogElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        modalRef.current?.showModal();
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-base-content">
                    Delete Account
                </h2>

                <p className="mt-1 text-sm text-base-content text-opacity-80">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
                Delete Account
            </DangerButton>

            <Modal
                ref={modalRef}
                className="w-1/2 max-w-3xl"
                onClose={closeModal}
            >
                <form onSubmit={deleteUser}>
                    <Modal.Content>
                        <h2 className="text-lg font-medium text-base-content">
                            Are you sure you want to delete your account?
                        </h2>

                        <p className="mt-1 text-sm text-base-content text-opacity-80">
                            Once your account is deleted, all of its resources
                            and data will be permanently deleted. Please enter
                            your password to confirm you would like to
                            permanently delete your account.
                        </p>

                        <div className="mt-6">
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                errorMessage={errors.password}
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                                className="block w-3/4"
                                isFocused
                                placeholder="Password"
                            />
                        </div>
                    </Modal.Content>

                    <Modal.Footer>
                        <DangerButton className="ms-3" disabled={processing}>
                            Delete Account
                        </DangerButton>
                    </Modal.Footer>
                </form>
            </Modal>
        </section>
    );
}
