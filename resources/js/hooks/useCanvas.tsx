import {
    MutableRefObject,
    PropsWithChildren,
    createContext,
    useContext,
    useRef,
} from 'react';

type CanvasContextProps = {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
};

const CanvasContext = createContext<CanvasContextProps | null>(null);

export const CanvasProvider = ({ children }: PropsWithChildren) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const initialValue = {
        canvasRef,
    };

    return (
        <CanvasContext.Provider value={initialValue}>
            {children}
        </CanvasContext.Provider>
    );
};

export const useCanvas = () => {
    const context = useContext(CanvasContext);
    if (context === null) {
        throw new Error('useCanvas must be used within a CanvasProvider');
    }

    return context;
};
