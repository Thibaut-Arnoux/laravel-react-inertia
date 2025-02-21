import { Reset } from '@/Components/Icons/Reset';
import { useCanvas } from '@/hooks/useCanvas';

export const ResetButton = () => {
    const { reset } = useCanvas();

    return (
        <button className={`btn btn-square btn-ghost btn-sm`} onClick={reset}>
            <Reset />
        </button>
    );
};
