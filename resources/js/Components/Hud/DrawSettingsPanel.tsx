import { ColorButton } from '@/Components/ColorButton';
import { ColorPickerButton } from '@/Components/ColorPickerButton';
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
        <ul className="menu w-56 rounded-box bg-base-200">
            <li>
                <details open>
                    <summary className="mb-2 text-base-content">Color</summary>
                    <div className="flex flex-row justify-between px-1">
                        <ColorButton
                            color={CanvasDefaultSettings.STROKE_DARK}
                        />
                        <ColorButton color="#666666" />
                        <ColorButton color="#ABABAB" />
                        <ColorButton
                            color={CanvasDefaultSettings.STROKE_LIGHT}
                        />
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
    );
};
