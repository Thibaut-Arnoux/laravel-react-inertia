import { Coordinates } from '@/Components/Coordinates';
import { BottomLeft } from '@/Components/Hud/BottomLeft';
import { BottomMiddle } from '@/Components/Hud/BottomMiddle';
import { BottomRight } from '@/Components/Hud/BottomRight';
import { DrawPanel } from '@/Components/Hud/DrawPanel';
import { TopLeft } from '@/Components/Hud/TopLeft';
import { TopMiddle } from '@/Components/Hud/TopMiddle';
import { TopRight } from '@/Components/Hud/TopRight';
import { ColorPickerButton } from '../ColorPickerButton';
import { Slider } from '../Slider';

export const Hud = () => {
    return (
        <div>
            <TopLeft>
                <DrawPanel />
            </TopLeft>
            <TopMiddle></TopMiddle>
            <TopRight>
                <ul className="menu w-56 rounded-box bg-base-200">
                    <li>
                        <details open>
                            <summary className="mb-2 text-base-content">
                                Color
                            </summary>
                            {/* TODO : create color button */}
                            <div className="flex flex-row justify-between px-1">
                                <div className="btn btn-circle btn-ghost btn-active btn-sm">
                                    <div
                                        className={`h-5 w-5 rounded-full bg-red-500`}
                                    ></div>
                                </div>
                                <div className="btn btn-circle btn-ghost btn-sm">
                                    <div
                                        className={`h-5 w-5 rounded-full bg-green-500`}
                                    ></div>
                                </div>
                                <div className="btn btn-circle btn-ghost btn-sm">
                                    <div
                                        className={`h-5 w-5 rounded-full bg-blue-500`}
                                    ></div>
                                </div>
                                <div className="btn btn-circle btn-ghost btn-sm">
                                    <div
                                        className={`h-5 w-5 rounded-full bg-gray-500`}
                                    ></div>
                                </div>
                                <ColorPickerButton />
                            </div>
                        </details>
                    </li>
                    <li>
                        <details open>
                            <summary className="my-2 text-base-content">
                                Line Width
                            </summary>
                            <div className="px-4">
                                <Slider />
                            </div>
                        </details>
                    </li>
                </ul>
            </TopRight>

            <BottomLeft></BottomLeft>
            <BottomMiddle></BottomMiddle>
            <BottomRight>
                <Coordinates />
            </BottomRight>
        </div>
    );
};
