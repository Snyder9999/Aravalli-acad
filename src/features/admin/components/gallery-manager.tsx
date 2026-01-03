'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useGalleryStore } from '@/stores/gallery.store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { Trash2, Edit, Plus } from 'lucide-react';

export function GalleryManager() {
    const { images, addImage, updateImage, deleteImage } = useGalleryStore();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        url: '',
        title: '',
        description: '',
        category: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.url || !formData.title) {
            toast.error('Please fill all required fields');
            return;
        }

        if (editingId) {
            updateImage(editingId, formData);
            toast.success('Image updated successfully');
            setEditingId(null);
        } else {
            addImage(formData);
            toast.success('Image added successfully');
        }

        setFormData({
            url: '',
            title: '',
            description: '',
            category: '',
        });
        setIsAdding(false);
    };

    const handleEdit = (id: string) => {
        const image = images.find((img) => img.id === id);
        if (image) {
            setFormData({
                url: image.url,
                title: image.title,
                description: image.description || '',
                category: image.category || '',
            });
            setEditingId(id);
            setIsAdding(true);
        }
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this image?')) {
            deleteImage(id);
            toast.success('Image deleted successfully');
        }
    };

    const handleCancel = () => {
        setIsAdding(false);
        setEditingId(null);
        setFormData({
            url: '',
            title: '',
            description: '',
            category: '',
        });
    };

    return (
        <div className="space-y-6">
            {/* Add/Edit Form */}
            {isAdding ? (
                <Card className="p-6">
                    <h3 className="mb-4 text-xl font-bold">
                        {editingId ? 'Edit Image' : 'Add New Image'}
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="url">Image URL *</Label>
                            <Input
                                id="url"
                                value={formData.url}
                                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                placeholder="https://example.com/image.jpg or use Unsplash"
                                className="mt-1"
                            />
                            <p className="mt-1 text-xs text-gray-500">
                                Tip: Use Unsplash URLs like https://images.unsplash.com/photo-...
                            </p>
                        </div>

                        <div>
                            <Label htmlFor="title">Title *</Label>
                            <Input
                                id="title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="Image title"
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Image description (optional)"
                                rows={3}
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <Label htmlFor="category">Category</Label>
                            <Input
                                id="category"
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                placeholder="e.g., Campus, Events, Facilities"
                                className="mt-1"
                            />
                        </div>

                        {formData.url && (
                            <div className="rounded-lg border p-4">
                                <p className="mb-2 text-sm font-medium">Preview:</p>
                                <div className="relative h-48 w-full overflow-hidden rounded">
                                    <Image
                                        src={formData.url}
                                        alt="Preview"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex gap-3">
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                                {editingId ? 'Update Image' : 'Add Image'}
                            </Button>
                            <Button type="button" variant="outline" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Card>
            ) : (
                <Button onClick={() => setIsAdding(true)} className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Image
                </Button>
            )}

            {/* Gallery Grid */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold">All Images ({images.length})</h3>
                {images.length === 0 ? (
                    <Card className="p-8 text-center text-gray-500">
                        No images yet. Add your first image above.
                    </Card>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {images.map((image) => (
                            <Card key={image.id} className="overflow-hidden">
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={image.url}
                                        alt={image.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {image.category && (
                                        <span className="absolute right-2 top-2 rounded-full bg-blue-600 px-2 py-1 text-xs text-white">
                                            {image.category}
                                        </span>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h4 className="mb-1 font-semibold">{image.title}</h4>
                                    {image.description && (
                                        <p className="mb-3 text-sm text-gray-600">{image.description}</p>
                                    )}
                                    <div className="flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => handleEdit(image.id)}
                                            className="flex-1"
                                        >
                                            <Edit className="mr-1 h-3 w-3" />
                                            Edit
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="destructive"
                                            onClick={() => handleDelete(image.id)}
                                            className="flex-1"
                                        >
                                            <Trash2 className="mr-1 h-3 w-3" />
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
