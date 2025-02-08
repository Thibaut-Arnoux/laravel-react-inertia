import { Reset } from '@/Components/Icons/Reset';
import { useCanvas } from '@/hooks/useCanvas';

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
