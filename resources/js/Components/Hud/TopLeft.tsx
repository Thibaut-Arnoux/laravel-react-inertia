import { PropsWithChildren } from 'react';

export const TopLeft = ({ children }: PropsWithChildren) => {
    return <div className="absolute">{children}</div>;
};
