import { ShapeModeEnum } from '@/enums/shape';
import { useCanvasActions, useShapeMode } from '@/hooks/useCanvasStore';

export const ShapeModeToggle = () => {
    const shapeMode = useShapeMode();
    const { toogleShapeMode, setShapeMode } = useCanvasActions();

    return (
        <>
            <span
                className="cursor-pointer"
                onClick={() => setShapeMode(ShapeModeEnum.STROKE)}
            >
                Stroke
            </span>
            <input
                type="checkbox"
                className="toggle toggle-sm border-base-content bg-base-content hover:bg-base-content"
                onChange={toogleShapeMode}
                checked={shapeMode === ShapeModeEnum.FILL}
            />
            <span
                className="cursor-pointer"
                onClick={() => setShapeMode(ShapeModeEnum.FILL)}
            >
                Fill
            </span>
        </>
    );
};
