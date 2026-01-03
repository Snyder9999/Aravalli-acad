'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80',
        alt: 'School Campus',
    },
    {
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80',
        alt: 'Classroom',
    },
    {
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80',
        alt: 'Library',
    },
];

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative h-[600px] w-full overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
            {/* Background Image Carousel */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-40' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.alt}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl text-white">
                    <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                        Quality Education from Class 1 to 12
                    </h1>
                    <p className="mb-8 text-xl md:text-2xl">
                        SEBA-affiliated school with Science & Arts streams
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                            <Link href="/contact">View Admissions</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                            <Link href="/notices">View Notices</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Carousel Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-white' : 'bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
