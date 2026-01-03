export interface Notice {
    id: string;
    title: string;
    date: string;
    content: string;
    isNew: boolean;
    createdAt: string;
}

export interface NoticeFormData {
    title: string;
    content: string;
}
