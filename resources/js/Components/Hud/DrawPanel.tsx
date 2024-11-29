import { DrawButton } from '@/Components/DrawButton';

export const DrawPanel = () => {
    return (
        <div className="flex flex-row gap-2 rounded bg-base-200 p-1 shadow">
            <DrawButton drawButtonMode="rectangle" />
            <DrawButton drawButtonMode="triangle" />
            <DrawButton drawButtonMode="rightTriangle" />
            <DrawButton drawButtonMode="line" />
            <DrawButton drawButtonMode="pen" />
        </div>
    );
};
