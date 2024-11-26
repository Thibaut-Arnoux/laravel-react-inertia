import { PropsWithChildren } from 'react';

export const BottomRight = ({ children }: PropsWithChildren) => {
    return <div className="absolute bottom-2 right-2">{children}</div>;
};
