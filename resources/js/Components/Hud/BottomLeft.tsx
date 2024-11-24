import { PropsWithChildren } from 'react';

export const BottomLeft = ({ children }: PropsWithChildren) => {
    return <div className="absolute bottom-0">{children}</div>;
};
