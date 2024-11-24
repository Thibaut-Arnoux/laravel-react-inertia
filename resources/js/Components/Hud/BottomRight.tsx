import { PropsWithChildren } from 'react';

export const BottomRight = ({ children }: PropsWithChildren) => {
    return <div className="absolute bottom-0 right-0">{children}</div>;
};
