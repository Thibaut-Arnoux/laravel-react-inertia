import { Canvas } from '@/Components/Canvas';
import { Hud } from '@/Components/Hud/Hud';
import { Render } from '@/Components/Render';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CanvasProvider } from '@/providers/canvasProvider';
import { Head } from '@inertiajs/react';

const Paint = () => {
    return (
        <AuthenticatedLayout>
            <Head title="Paint" />
            <div className="overflow-hidden">
                <CanvasProvider>
                    <Hud />
                    <Canvas>
                        <Render />
                    </Canvas>
                </CanvasProvider>
            </div>
        </AuthenticatedLayout>
    );
};

export default Paint;
