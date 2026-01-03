'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useGalleryStore } from '@/stores/gallery.store';
import { X, ImageIcon } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function GalleryPage() {
    const images = useGalleryStore((state) => state.images);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-4 text-5xl font-bold">Gallery</h1>
                    <p className="text-xl">Glimpses of life at Aravalli Academy</p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {images.length === 0 ? (
                        <div className="rounded-lg bg-white p-12 text-center shadow-md">
                            <ImageIcon className="mx-auto mb-4 h-16 w-16 text-gray-400" />
                            <p className="text-lg text-gray-600">No images available at the moment</p>
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {images.map((image) => (
                                <div
                                    key={image.id}
                                    className="group relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl"
                                    onClick={() => setSelectedImage(image.url)}
                                >
                                    <div className="relative h-64 w-full">
                                        <Image
                                            src={image.url}
                                            alt={image.title}
                                            fill
                                            className="object-cover transition duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-white transition group-hover:translate-y-0">
                                        <h3 className="mb-1 font-semibold">{image.title}</h3>
                                        {image.description && (
                                            <p className="text-sm text-gray-200">{image.description}</p>
                                        )}
                                    </div>
                                    {image.category && (
                                        <div className="absolute right-2 top-2">
                                            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                                                {image.category}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Image Modal */}
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-4xl p-0">
                    {selectedImage && (
                        <div className="relative h-[80vh] w-full">
                            <Image
                                src={selectedImage}
                                alt="Gallery image"
                                fill
                                className="object-contain"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                                aria-label="Close"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </main>
    );
}
