import { PropsWithChildren } from 'react';

export const TopLeft = ({ children }: PropsWithChildren) => {
    return (
        <div className="relative">
            <div className="absolute left-2 top-2">{children}</div>
        </div>
    );
};
