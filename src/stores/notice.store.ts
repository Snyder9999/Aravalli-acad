import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Notice } from '@/features/notices/types';

interface NoticeStore {
    notices: Notice[];
    addNotice: (notice: Omit<Notice, 'id' | 'createdAt'>) => void;
    updateNotice: (id: string, notice: Partial<Notice>) => void;
    deleteNotice: (id: string) => void;
    getNotices: () => Notice[];
}

const defaultNotices: Notice[] = [
    {
        id: '1',
        title: 'Admission Open for Academic Year 2026-27',
        date: '2026-01-03',
        content:
            'Admissions are now open for classes 1 to 12 for the academic year 2026-27. Limited seats available. Apply now!',
        isNew: true,
        createdAt: new Date().toISOString(),
    },
    {
        id: '2',
        title: 'Annual Sports Day - January 15, 2026',
        date: '2026-01-02',
        content:
            'Annual Sports Day will be held on January 15, 2026. All students are requested to participate actively.',
        isNew: true,
        createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
        id: '3',
        title: 'Parent-Teacher Meeting Schedule',
        date: '2025-12-28',
        content:
            'Parent-Teacher meetings will be conducted from January 10-12, 2026. Please check the schedule on the notice board.',
        isNew: false,
        createdAt: new Date(Date.now() - 6 * 86400000).toISOString(),
    },
];

export const useNoticeStore = create<NoticeStore>()(
    persist(
        (set, get) => ({
            notices: defaultNotices,
            addNotice: (notice) => {
                const newNotice: Notice = {
                    ...notice,
                    id: Date.now().toString(),
                    createdAt: new Date().toISOString(),
                };
                set((state) => ({
                    notices: [newNotice, ...state.notices],
                }));
            },
            updateNotice: (id, updatedNotice) => {
                set((state) => ({
                    notices: state.notices.map((notice) =>
                        notice.id === id ? { ...notice, ...updatedNotice } : notice
                    ),
                }));
            },
            deleteNotice: (id) => {
                set((state) => ({
                    notices: state.notices.filter((notice) => notice.id !== id),
                }));
            },
            getNotices: () => get().notices,
        }),
        {
            name: 'notice-storage',
        }
    )
);
