export interface GalleryImage {
    id: string;
    url: string;
    title: string;
    description?: string;
    category?: string;
    createdAt: string;
}

export interface GalleryFormData {
    url: string;
    title: string;
    description?: string;
    category?: string;
}
