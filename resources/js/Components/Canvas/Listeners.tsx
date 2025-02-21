import { useMouseDown } from '@/hooks/listeners/useMouseDown';
import { useMouseMove } from '@/hooks/listeners/useMouseMove';
import { useMouseUp } from '@/hooks/listeners/useMouseUp';

export const Listeners = () => {
    useMouseDown();
    useMouseUp();
    useMouseMove();

    return <></>;
};
