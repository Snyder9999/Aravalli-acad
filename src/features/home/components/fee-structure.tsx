import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export function FeeStructure() {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left: Image */}
                    <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80"
                            alt="Students"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right: Content */}
                    <div>
                        <h2 className="mb-6 text-4xl font-bold text-gray-900">
                            Affordable Fee Structure
                        </h2>
                        <p className="mb-8 text-lg text-gray-600">
                            Quality education shouldn't be a privilege. We believe in making excellent
                            education accessible to all.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Merit-based Concessions</h3>
                                    <p className="text-gray-600">
                                        Scholarships for academically excellent students
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Flexible Payment Plans</h3>
                                    <p className="text-gray-600">
                                        Quarterly and monthly payment options available
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Supportive Environment</h3>
                                    <p className="text-gray-600">
                                        Financial assistance for deserving students
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
