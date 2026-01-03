'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/constants';
import { UserCheck, Monitor, Heart, BookOpen, Shield } from 'lucide-react';

const iconMap = {
    'user-check': UserCheck,
    monitor: Monitor,
    heart: Heart,
    'book-open': BookOpen,
    shield: Shield,
};

export function WhyChooseUs() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 3;

    const next = () => {
        setCurrentIndex((prev) =>
            prev + itemsPerView >= WHY_CHOOSE_US.length ? 0 : prev + 1
        );
    };

    const prev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? Math.max(WHY_CHOOSE_US.length - itemsPerView, 0) : prev - 1
        );
    };

    const visibleItems = WHY_CHOOSE_US.slice(currentIndex, currentIndex + itemsPerView);

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">Why Choose Aravalli Academy</h2>
                    <p className="text-lg text-gray-600">Excellence in education and character building</p>
                </div>

                <div className="relative">
                    <div className="grid gap-6 md:grid-cols-3">
                        {visibleItems.map((item, index) => {
                            const Icon = iconMap[item.icon as keyof typeof iconMap];
                            return (
                                <div
                                    key={currentIndex + index}
                                    className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
                                >
                                    <div className="mb-4 inline-block rounded-full bg-blue-100 p-4">
                                        <Icon className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:bg-gray-50"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-600" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:bg-gray-50"
                        aria-label="Next"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </section>
    );
}
