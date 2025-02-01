import { useCanvas } from '@/hooks/useCanvas';
import { Reset } from './Icons/Reset';

export const ResetButton = () => {
    const { resetCanvas } = useCanvas();

    return (
        <button
            className={`btn btn-square btn-ghost btn-sm`}
            onClick={resetCanvas}
        >
            <Reset />
        </button>
    );
};
