import { ColorButton } from '@/Components/ColorButton';
import { ColorPickerButton } from '@/Components/ColorPickerButton';
import { ShapeModeToggle } from '@/Components/ShapeModeToggle';
import { Slider } from '@/Components/Slider';
import { useCanvas } from '@/hooks/useCanvas';
import { useDrawMode } from '@/hooks/useCanvasStore';
import { CanvasDefaultSettings } from '@/types/canvas';
import { useEffect } from 'react';

export const DrawSettingsPanel = () => {
    const drawMode = useDrawMode();

    return drawMode && <DrawSettingsPanelContent />;
};

const DrawSettingsPanelContent = () => {
    const { syncResetCanvasSettings } = useCanvas();

    useEffect(() => {
        syncResetCanvasSettings();
    }, [syncResetCanvasSettings]);

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
                </details>
            </li>
            <li>
                <details open>
                    <summary className="mt-2 text-base-content">Path</summary>
                    <Slider className="mt-2 px-4" label="Width" />
                    <ShapeModeToggle className="mt-4 px-4" />
                </details>
            </li>
        </ul>
    );
};
