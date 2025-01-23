import { PropsWithChildren } from 'react';

export const TopRight = ({ children }: PropsWithChildren) => {
    return (
        <div className="relative">
            <div className="absolute right-2 top-2">{children}</div>
        </div>
    );
};
