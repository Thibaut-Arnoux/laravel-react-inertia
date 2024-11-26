import { Coordinates } from '@/Components/Coordinates';
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
                <div className="m-4 flex flex-row gap-2 rounded bg-base-200 p-1 shadow">
                    <button
                        className="btn btn-square btn-outline btn-sm rounded-none border-none"
                        onClick={(e) => {
                            console.debug(e);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <rect
                                strokeWidth="1"
                                x="4"
                                y="4"
                                width="16"
                                height="16"
                            />
                        </svg>
                    </button>
                </div>
            </TopLeft>
            <TopMiddle></TopMiddle>
            <TopRight></TopRight>

            <BottomLeft></BottomLeft>
            <BottomMiddle></BottomMiddle>
            <BottomRight>
                <Coordinates />
            </BottomRight>
        </>
    );
};
