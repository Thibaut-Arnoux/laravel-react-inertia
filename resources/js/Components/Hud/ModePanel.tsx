import { ModeButton } from '@/Components/ModeButton';
import { ModeList } from '@/enums/mode';

export const ModePanel = () => {
    return (
        <div className="flex flex-row gap-2 rounded bg-base-200 p-1 shadow">
            {ModeList.map((mode) => (
                <ModeButton key={mode} modeButton={mode} />
            ))}
        </div>
    );
};
