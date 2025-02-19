import { Canvas } from '@/Components/Canvas';
import { Cursor } from '@/Components/Canvas/Cursor';
import { Listeners } from '@/Components/Canvas/Listeners';
import { Render } from '@/Components/Canvas/Render';
import { Synchronization } from '@/Components/Canvas/Synchronization';
import { Hud } from '@/Components/Hud/Hud';
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
                        <Cursor />
                        <Listeners />
                        <Synchronization />
                    </Canvas>
                </CanvasProvider>
            </div>
        </AuthenticatedLayout>
    );
};

export default Paint;
