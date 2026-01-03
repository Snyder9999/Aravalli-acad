'use client';

import { useState } from 'react';
import { useNoticeStore } from '@/stores/notice.store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { Trash2, Edit, Plus } from 'lucide-react';
import { format } from 'date-fns';

export function NoticeManager() {
    const { notices, addNotice, updateNotice, deleteNotice } = useNoticeStore();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: '',
        date: new Date().toISOString().split('T')[0],
        content: '',
        isNew: true,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.content) {
            toast.error('Please fill all required fields');
            return;
        }

        if (editingId) {
            updateNotice(editingId, formData);
            toast.success('Notice updated successfully');
            setEditingId(null);
        } else {
            addNotice(formData);
            toast.success('Notice added successfully');
        }

        setFormData({
            title: '',
            date: new Date().toISOString().split('T')[0],
            content: '',
            isNew: true,
        });
        setIsAdding(false);
    };

    const handleEdit = (id: string) => {
        const notice = notices.find((n) => n.id === id);
        if (notice) {
            setFormData({
                title: notice.title,
                date: notice.date,
                content: notice.content,
                isNew: notice.isNew,
            });
            setEditingId(id);
            setIsAdding(true);
        }
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this notice?')) {
            deleteNotice(id);
            toast.success('Notice deleted successfully');
        }
    };

    const handleCancel = () => {
        setIsAdding(false);
        setEditingId(null);
        setFormData({
            title: '',
            date: new Date().toISOString().split('T')[0],
            content: '',
            isNew: true,
        });
    };

    return (
        <div className="space-y-6">
            {/* Add/Edit Form */}
            {isAdding ? (
                <Card className="p-6">
                    <h3 className="mb-4 text-xl font-bold">
                        {editingId ? 'Edit Notice' : 'Add New Notice'}
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="title">Title *</Label>
                            <Input
                                id="title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="Notice title"
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <Label htmlFor="date">Date *</Label>
                            <Input
                                id="date"
                                type="date"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <Label htmlFor="content">Content *</Label>
                            <Textarea
                                id="content"
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                placeholder="Notice content"
                                rows={4}
                                className="mt-1"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="isNew"
                                checked={formData.isNew}
                                onChange={(e) => setFormData({ ...formData, isNew: e.target.checked })}
                                className="h-4 w-4"
                            />
                            <Label htmlFor="isNew" className="cursor-pointer">
                                Mark as NEW
                            </Label>
                        </div>

                        <div className="flex gap-3">
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                                {editingId ? 'Update Notice' : 'Add Notice'}
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
                    Add New Notice
                </Button>
            )}

            {/* Notices List */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold">All Notices ({notices.length})</h3>
                {notices.length === 0 ? (
                    <Card className="p-8 text-center text-gray-500">
                        No notices yet. Add your first notice above.
                    </Card>
                ) : (
                    notices.map((notice) => (
                        <Card key={notice.id} className="p-6">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="mb-2 flex items-center gap-3">
                                        <h4 className="text-lg font-semibold">{notice.title}</h4>
                                        {notice.isNew && (
                                            <span className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                                                NEW
                                            </span>
                                        )}
                                    </div>
                                    <p className="mb-2 text-sm text-gray-600">
                                        {format(new Date(notice.date), 'MMMM dd, yyyy')}
                                    </p>
                                    <p className="text-gray-700">{notice.content}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => handleEdit(notice.id)}
                                    >
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="destructive"
                                        onClick={() => handleDelete(notice.id)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}
