import { PropsWithChildren } from 'react';

export const BottomMiddle = ({ children }: PropsWithChildren) => {
    return (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            {children}
        </div>
    );
};
