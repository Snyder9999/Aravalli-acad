import Image from 'next/image';
import { PRINCIPAL_MESSAGE } from '@/constants';

export function PrincipalMessage() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">Message from the Principal</h2>
                </div>

                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left: Message */}
                    <div className="space-y-4 text-gray-700">
                        {PRINCIPAL_MESSAGE.message.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="leading-relaxed">
                                {paragraph.trim()}
                            </p>
                        ))}
                        <div className="mt-6 border-l-4 border-blue-600 pl-4">
                            <p className="font-semibold text-gray-900">{PRINCIPAL_MESSAGE.name}</p>
                            <p className="text-sm text-gray-600">{PRINCIPAL_MESSAGE.designation}</p>
                        </div>
                    </div>

                    {/* Right: Photo */}
                    <div className="relative mx-auto h-[500px] w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
                        <Image
                            src={PRINCIPAL_MESSAGE.image}
                            alt={PRINCIPAL_MESSAGE.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
