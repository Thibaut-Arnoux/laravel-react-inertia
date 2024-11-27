import { useCanvas } from '@/hooks/useCanvas';

export const ShapePanel = () => {
    const { shapeMode, setShapeMode } = useCanvas();

    return (
        <div className="flex flex-row gap-2 rounded bg-base-200 p-1 shadow">
            <button
                className={
                    'btn btn-square btn-outline btn-sm rounded-none border-none' +
                    (shapeMode === 'rectangle' ? ' text-blue-400' : '')
                }
                onClick={() => {
                    setShapeMode((shape) =>
                        shape === 'rectangle' ? null : 'rectangle',
                    );
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <rect strokeWidth="1" x="4" y="4" width="16" height="16" />
                </svg>
            </button>
        </div>
    );
};
