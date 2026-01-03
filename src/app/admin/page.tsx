'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NoticeManager } from '@/features/admin/components/notice-manager';
import { GalleryManager } from '@/features/admin/components/gallery-manager';
import { Shield } from 'lucide-react';

export default function AdminPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-r from-gray-900 to-gray-700 py-12 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <Shield className="h-10 w-10" />
                        <div>
                            <h1 className="text-4xl font-bold">Admin Panel</h1>
                            <p className="text-gray-300">Manage notices and gallery (Demo CMS)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 mb-6">
                        <p className="text-sm text-yellow-800">
                            <strong>Demo Mode:</strong> This is a frontend-only admin panel. All changes are
                            stored in localStorage and will reflect immediately on the public pages. No
                            authentication required for demo purposes.
                        </p>
                    </div>

                    <Tabs defaultValue="notices" className="w-full">
                        <TabsList className="grid w-full max-w-md grid-cols-2">
                            <TabsTrigger value="notices">Manage Notices</TabsTrigger>
                            <TabsTrigger value="gallery">Manage Gallery</TabsTrigger>
                        </TabsList>

                        <TabsContent value="notices" className="mt-6">
                            <NoticeManager />
                        </TabsContent>

                        <TabsContent value="gallery" className="mt-6">
                            <GalleryManager />
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </main>
    );
}
