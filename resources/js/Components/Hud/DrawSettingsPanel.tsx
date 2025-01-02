import { ColorButton } from '@/Components/ColorButton';
import { ColorPickerButton } from '@/Components/ColorPickerButton';
import { LineWidthSlider } from '@/Components/LineWidthSlider';
import { ShapeModeToggle } from '@/Components/ShapeModeToggle';
import { TransparencySlider } from '@/Components/TransparencySlider';
import { ShapeModeEnum } from '@/enums/shape';
import { useCanvas } from '@/hooks/useCanvas';
import { useCanvasActions, useDrawMode } from '@/hooks/useCanvasStore';
import { CanvasDefaultSettings } from '@/types/canvas';
import { useEffect } from 'react';

export const DrawSettingsPanel = () => {
    const drawMode = useDrawMode();

    return drawMode && <DrawSettingsPanelContent />;
};

const DrawSettingsPanelContent = () => {
    const { setShapeMode } = useCanvasActions();
    const { syncResetCanvasSettings } = useCanvas();

    useEffect(() => {
        syncResetCanvasSettings();
        setShapeMode(ShapeModeEnum.STROKE);
    }, [syncResetCanvasSettings, setShapeMode]);

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
