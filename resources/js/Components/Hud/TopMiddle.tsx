import { PropsWithChildren } from 'react';

export const TopMiddle = ({ children }: PropsWithChildren) => {
    return <div className="absolute left-1/2 -translate-x-1/2">{children}</div>;
};
