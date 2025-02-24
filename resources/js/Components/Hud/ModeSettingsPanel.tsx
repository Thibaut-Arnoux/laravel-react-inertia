import { ColorButton } from '@/Components/ColorButton';
import { ColorPickerButton } from '@/Components/ColorPickerButton';
import { LineWidthSlider } from '@/Components/LineWidthSlider';
import { ShapeModeToggle } from '@/Components/ShapeModeToggle';
import { TransparencySlider } from '@/Components/TransparencySlider';
import { ModeEnum } from '@/enums/mode';
import { ShapeModeEnum } from '@/enums/shape';
import { useCanvasActions, useMode } from '@/hooks/useCanvasStore';
import { useDrawStack } from '@/hooks/useDrawStackStore';
import { CanvasDefaultSettings } from '@/types/canvas';
import { isDrawableMode } from '@/types/mode';
import { useEffect } from 'react';

export const ModeSettingsPanel = () => {
    const mode = useMode();

    if (isDrawableMode(mode)) return <DrawSettingsPanel />;
    else if (mode === ModeEnum.SELECTION) return <DrawStackPanel />;
};

const DrawSettingsPanel = () => {
    const { setShapeMode, resetDrawSettings } = useCanvasActions();

    useEffect(() => {
        resetDrawSettings();
        setShapeMode(ShapeModeEnum.STROKE);
    }, [resetDrawSettings, setShapeMode]);

    return (
        <ul className="menu w-56 rounded-box bg-base-200 shadow">
            <li>
                <details open>
                    <summary className="mb-2 text-base-content">Color</summary>
                    <div className="flex flex-row justify-between px-1">
                        <ColorButton color={CanvasDefaultSettings.COLOR_DARK} />
                        <ColorButton color="#666666" />
                        <ColorButton color="#ABABAB" />
                        <ColorButton
                            color={CanvasDefaultSettings.COLOR_LIGHT}
                        />
                        <ColorPickerButton />
                    </div>
                    <TransparencySlider className="mt-4 px-4" />
                </details>
            </li>
            <li>
                <details open>
                    <summary className="mt-2 text-base-content">Path</summary>
                    <LineWidthSlider className="mt-2 px-4" />
                    <ShapeModeToggle className="mt-4 px-4" />
                </details>
            </li>
        </ul>
    );
};

const DrawStackPanel = () => {
    const drawStack = useDrawStack();

    return (
        <ul className="menu menu-sm w-56 rounded-box bg-base-200 shadow">
            <li className="menu-title">DrawStack</li>
            {drawStack.map((drawable, index) => (
                <li key={index}>
                    <a>Test</a>
                </li>
            ))}
        </ul>
    );
};
