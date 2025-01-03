import { Coordinates } from '@/Components/Coordinates';
import { BottomLeft } from '@/Components/Hud/BottomLeft';
import { BottomMiddle } from '@/Components/Hud/BottomMiddle';
import { BottomRight } from '@/Components/Hud/BottomRight';
import { DrawPanel } from '@/Components/Hud/DrawPanel';
import { DrawSettingsPanel } from '@/Components/Hud/DrawSettingsPanel';
import { TopLeft } from '@/Components/Hud/TopLeft';
import { TopMiddle } from '@/Components/Hud/TopMiddle';
import { TopRight } from '@/Components/Hud/TopRight';
import { useIsDrawing } from '@/hooks/useCanvasStore';

export const Hud = () => {
    const isDrawing = useIsDrawing();

    return (
        <div className={`${isDrawing && 'pointer-events-none opacity-50'}`}>
            <TopLeft>
                <DrawPanel />
            </TopLeft>
            <TopMiddle></TopMiddle>
            <TopRight>
                <DrawSettingsPanel />
            </TopRight>

            <BottomLeft></BottomLeft>
            <BottomMiddle></BottomMiddle>
            <BottomRight>
                <Coordinates />
            </BottomRight>
        </div>
    );
};
