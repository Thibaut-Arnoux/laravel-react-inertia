import { Canvas } from '@/Components/Canvas';
import { Hud } from '@/Components/Hud/Hud';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Paint = () => {
    return (
        <AuthenticatedLayout>
            <Head title="Paint" />
            <div className="flex-grow">
                <Hud />
                <Canvas />
            </div>
        </AuthenticatedLayout>
    );
};

export default Paint;
