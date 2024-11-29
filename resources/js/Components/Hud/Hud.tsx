import { Coordinates } from '@/Components/Coordinates';
import { BottomLeft } from '@/Components/Hud/BottomLeft';
import { BottomMiddle } from '@/Components/Hud/BottomMiddle';
import { BottomRight } from '@/Components/Hud/BottomRight';
import { DrawPanel } from '@/Components/Hud/DrawPanel';
import { TopLeft } from '@/Components/Hud/TopLeft';
import { TopMiddle } from '@/Components/Hud/TopMiddle';
import { TopRight } from '@/Components/Hud/TopRight';
import { Slider } from '../Slider';

export const Hud = () => {
    return (
        <div>
            <TopLeft>
                <DrawPanel />
            </TopLeft>
            <TopMiddle></TopMiddle>
            <TopRight></TopRight>

            <BottomLeft>
                <Slider />
            </BottomLeft>
            <BottomMiddle></BottomMiddle>
            <BottomRight>
                <Coordinates />
            </BottomRight>
        </div>
    );
};
