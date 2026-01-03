'use client';

import { useNoticeStore } from '@/stores/notice.store';
import { Calendar, Bell } from 'lucide-react';
import { format } from 'date-fns';

export default function NoticesPage() {
    const notices = useNoticeStore((state) => state.notices);

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-4 text-5xl font-bold">Notice Board</h1>
                    <p className="text-xl">Stay updated with latest announcements and events</p>
                </div>
            </section>

            {/* Notices List */}
            <section className="py-16">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        {notices.length === 0 ? (
                            <div className="rounded-lg bg-white p-12 text-center shadow-md">
                                <Bell className="mx-auto mb-4 h-16 w-16 text-gray-400" />
                                <p className="text-lg text-gray-600">No notices available at the moment</p>
                            </div>
                        ) : (
                            notices.map((notice) => (
                                <div
                                    key={notice.id}
                                    className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg"
                                >
                                    <div className="p-6">
                                        <div className="mb-4 flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="mb-2 flex items-center gap-3">
                                                    <h2 className="text-2xl font-bold text-gray-900">{notice.title}</h2>
                                                    {notice.isNew && (
                                                        <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                                                            NEW
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{format(new Date(notice.date), 'MMMM dd, yyyy')}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="leading-relaxed text-gray-700">{notice.content}</p>
                                    </div>
                                    <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
