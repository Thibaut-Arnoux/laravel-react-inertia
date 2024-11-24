import { BottomLeft } from './BottomLeft';
import { BottomMiddle } from './BottomMiddle';
import { BottomRight } from './BottomRight';
import { TopLeft } from './TopLeft';
import { TopMiddle } from './TopMiddle';
import { TopRight } from './TopRight';

export const Hud = () => {
    return (
        <>
            <TopLeft>
                <div className="flex flex-row gap-2">
                    <button className="btn">Default</button>
                    <button className="btn btn-neutral">Neutral</button>
                </div>
            </TopLeft>
            <TopMiddle></TopMiddle>
            <TopRight></TopRight>

            <BottomLeft></BottomLeft>
            <BottomMiddle></BottomMiddle>
            <BottomRight></BottomRight>
        </>
    );
};
