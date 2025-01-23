import { PropsWithChildren } from 'react';

export const BottomLeft = ({ children }: PropsWithChildren) => {
    return <div className="absolute bottom-2 left-2">{children}</div>;
};
