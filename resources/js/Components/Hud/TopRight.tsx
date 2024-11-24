import { PropsWithChildren } from 'react';

export const TopRight = ({ children }: PropsWithChildren) => {
    return <div className="absolute right-0">{children}</div>;
};
