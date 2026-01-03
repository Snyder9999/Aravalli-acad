import { BookOpen, Users, Award, GraduationCap } from 'lucide-react';

const academicSections = [
    {
        id: 'primary',
        title: 'Primary School (Class 1–5)',
        description: 'Foundation years focusing on basic literacy, numeracy, and value education',
        subjects: [
            'English',
            'Mathematics',
            'Environmental Studies',
            'Hindi/Assamese',
            'Art & Craft',
            'Physical Education',
        ],
        approach:
            'Play-based and activity-oriented learning with emphasis on building strong fundamentals and developing curiosity.',
        icon: BookOpen,
        color: 'blue',
    },
    {
        id: 'middle',
        title: 'Middle School (Class 6–8)',
        description: 'Conceptual learning with introduction to specialized subjects',
        subjects: [
            'English',
            'Mathematics',
            'Science',
            'Social Science',
            'Hindi/Assamese',
            'Computer Science',
            'Art & Music',
        ],
        approach:
            'Concept-based teaching with practical demonstrations, projects, and regular assessments to strengthen understanding.',
        icon: Users,
        color: 'green',
    },
    {
        id: 'secondary',
        title: 'Secondary School (Class 9–10)',
        description: 'SEBA curriculum preparation for board examinations',
        subjects: [
            'English',
            'Mathematics',
            'Science (Physics, Chemistry, Biology)',
            'Social Science',
            'Hindi/Assamese',
            'Computer Applications',
        ],
        approach:
            'Exam-focused preparation with regular tests, doubt-clearing sessions, and comprehensive study materials.',
        icon: Award,
        color: 'orange',
    },
    {
        id: 'science',
        title: 'Higher Secondary – Science (Class 11–12)',
        description: 'SEBA Science stream with comprehensive preparation',
        subjects: [
            'Physics',
            'Chemistry',
            'Mathematics',
            'Biology',
            'English',
            'Assamese/Hindi/MIL',
        ],
        approach:
            'In-depth subject knowledge with laboratory practicals, problem-solving sessions, and competitive exam guidance.',
        icon: GraduationCap,
        color: 'purple',
    },
    {
        id: 'arts',
        title: 'Higher Secondary – Arts (Class 11–12)',
        description: 'SEBA Arts stream with humanities focus',
        subjects: [
            'Political Science',
            'History',
            'Education',
            'Assamese',
            'English',
            'Economics (Optional)',
        ],
        approach:
            'Comprehensive understanding of humanities with focus on analytical thinking, essay writing, and current affairs.',
        icon: GraduationCap,
        color: 'pink',
    },
];

const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    purple: 'bg-purple-100 text-purple-600',
    pink: 'bg-pink-100 text-pink-600',
};

export default function AcademicsPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-4 text-5xl font-bold">Academics</h1>
                    <p className="text-xl">
                        Comprehensive education from foundation to higher secondary
                    </p>
                </div>
            </section>

            {/* Academic Sections */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {academicSections.map((section, index) => {
                            const Icon = section.icon;
                            const colorClass = colorClasses[section.color as keyof typeof colorClasses];

                            return (
                                <div
                                    key={section.id}
                                    id={section.id}
                                    className={`scroll-mt-24 rounded-2xl bg-white p-8 shadow-lg ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                        }`}
                                >
                                    <div className="mb-6 flex items-center gap-4">
                                        <div className={`rounded-full p-4 ${colorClass}`}>
                                            <Icon className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                                            <p className="text-gray-600">{section.description}</p>
                                        </div>
                                    </div>

                                    <div className="grid gap-8 lg:grid-cols-2">
                                        {/* Subjects */}
                                        <div>
                                            <h3 className="mb-4 text-xl font-semibold text-gray-900">
                                                Subjects Offered
                                            </h3>
                                            <ul className="grid grid-cols-2 gap-3">
                                                {section.subjects.map((subject) => (
                                                    <li
                                                        key={subject}
                                                        className="flex items-center gap-2 text-gray-700"
                                                    >
                                                        <div className="h-2 w-2 rounded-full bg-blue-600" />
                                                        {subject}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Teaching Approach */}
                                        <div>
                                            <h3 className="mb-4 text-xl font-semibold text-gray-900">
                                                Teaching Approach
                                            </h3>
                                            <p className="leading-relaxed text-gray-700">{section.approach}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
