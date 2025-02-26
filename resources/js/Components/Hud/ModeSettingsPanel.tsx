import { DrawSettingsPanel } from '@/Components/Hud/DrawSettingsPanel';
import { DrawStackPanel } from '@/Components/Hud/DrawStackPanel';
import { ModeEnum } from '@/enums/mode';
import { useMode } from '@/hooks/useCanvasStore';
import { isDrawableMode } from '@/types/mode';

export const ModeSettingsPanel = () => {
    const mode = useMode();

    if (isDrawableMode(mode)) return <DrawSettingsPanel />;
    else if (mode === ModeEnum.SELECTION) return <DrawStackPanel />;
};
