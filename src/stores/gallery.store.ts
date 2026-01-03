import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GalleryImage } from '@/features/gallery/types';

interface GalleryStore {
    images: GalleryImage[];
    addImage: (image: Omit<GalleryImage, 'id' | 'createdAt'>) => void;
    updateImage: (id: string, image: Partial<GalleryImage>) => void;
    deleteImage: (id: string) => void;
    getImages: () => GalleryImage[];
}

const defaultImages: GalleryImage[] = [
    {
        id: '1',
        url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
        title: 'School Campus',
        description: 'Beautiful campus with modern facilities',
        category: 'Campus',
        createdAt: new Date().toISOString(),
    },
    {
        id: '2',
        url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
        title: 'Science Laboratory',
        description: 'Well-equipped science lab for practical learning',
        category: 'Facilities',
        createdAt: new Date().toISOString(),
    },
    {
        id: '3',
        url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
        title: 'Library',
        description: 'Extensive collection of books and digital resources',
        category: 'Facilities',
        createdAt: new Date().toISOString(),
    },
    {
        id: '4',
        url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
        title: 'Annual Function',
        description: 'Students performing at the annual cultural event',
        category: 'Events',
        createdAt: new Date().toISOString(),
    },
    {
        id: '5',
        url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
        title: 'Classroom',
        description: 'Smart classrooms with modern teaching aids',
        category: 'Facilities',
        createdAt: new Date().toISOString(),
    },
    {
        id: '6',
        url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800',
        title: 'Sports Day',
        description: 'Students participating in athletic events',
        category: 'Events',
        createdAt: new Date().toISOString(),
    },
];

export const useGalleryStore = create<GalleryStore>()(
    persist(
        (set, get) => ({
            images: defaultImages,
            addImage: (image) => {
                const newImage: GalleryImage = {
                    ...image,
                    id: Date.now().toString(),
                    createdAt: new Date().toISOString(),
                };
                set((state) => ({
                    images: [newImage, ...state.images],
                }));
            },
            updateImage: (id, updatedImage) => {
                set((state) => ({
                    images: state.images.map((image) =>
                        image.id === id ? { ...image, ...updatedImage } : image
                    ),
                }));
            },
            deleteImage: (id) => {
                set((state) => ({
                    images: state.images.filter((image) => image.id !== id),
                }));
            },
            getImages: () => get().images,
        }),
        {
            name: 'gallery-storage',
        }
    )
);
