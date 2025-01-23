import { Coordinates } from '@/Components/Coordinates';
import { BottomLeft } from '@/Components/Hud/BottomLeft';
import { BottomMiddle } from '@/Components/Hud/BottomMiddle';
import { BottomRight } from '@/Components/Hud/BottomRight';
import { DrawSettingsPanel } from '@/Components/Hud/DrawSettingsPanel';
import { ModePanel } from '@/Components/Hud/ModePanel';
import { TopLeft } from '@/Components/Hud/TopLeft';
import { TopMiddle } from '@/Components/Hud/TopMiddle';
import { TopRight } from '@/Components/Hud/TopRight';
import { ZoomPanel } from '@/Components/Hud/ZoomPanel';
import { useIsDrawing } from '@/hooks/useCanvasStore';

export const Hud = () => {
    const isDrawing = useIsDrawing();

    return (
        <div className={`${isDrawing && 'pointer-events-none opacity-50'}`}>
            <TopLeft>
                <ModePanel />
            </TopLeft>
            <TopMiddle></TopMiddle>
            <TopRight>
                <DrawSettingsPanel />
            </TopRight>

            <BottomLeft>
                <ZoomPanel />
            </BottomLeft>
            <BottomMiddle></BottomMiddle>
            <BottomRight>
                <Coordinates />
            </BottomRight>
        </div>
    );
};
