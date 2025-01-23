import ApplicationLogo from '@/Components/ApplicationLogo';
import { useTheme } from '@/hooks/useThemeStore';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    const theme = useTheme();

    return (
        <div
            data-theme={theme}
            className="flex min-h-screen flex-col items-center bg-base-200 pt-6 sm:justify-center sm:pt-0"
        >
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-base-content" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-base-100 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
