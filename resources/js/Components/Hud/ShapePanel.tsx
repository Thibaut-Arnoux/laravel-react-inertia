import { ShapeButton } from '../ShapeButton';

export const ShapePanel = () => {
    return (
        <div className="flex flex-row gap-2 rounded bg-base-200 p-1 shadow">
            <ShapeButton shapeButtonMode="rectangle" />
            <ShapeButton shapeButtonMode="triangle" />
        </div>
    );
};
