import { Canvas } from '@/Components/Canvas';
import { Hud } from '@/Components/Hud/Hud';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CanvasProvider } from '@/hooks/useCanvas';
import { Head } from '@inertiajs/react';

const Paint = () => {
    return (
        <AuthenticatedLayout>
            <Head title="Paint" />
            <div className="overflow-hidden">
                <CanvasProvider>
                    <Hud />
                    <Canvas></Canvas>
                </CanvasProvider>
            </div>
        </AuthenticatedLayout>
    );
};

export default Paint;
