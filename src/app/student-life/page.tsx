import Image from 'next/image';
import {
    STUDENT_ACTIVITIES,
    CLUBS_SOCIETIES,
    SCHOOL_FACILITIES,
    ANNUAL_EVENTS,
} from '@/constants';
import {
    Trophy,
    Music,
    BookOpen,
    Heart,
    FlaskConical,
    Book,
    Palette,
    Leaf,
    MessageSquare,
    Theater,
    Library,
    Monitor,
    Calendar,
} from 'lucide-react';

const iconMap = {
    trophy: Trophy,
    music: Music,
    'book-open': BookOpen,
    heart: Heart,
    flask: FlaskConical,
    book: Book,
    palette: Palette,
    leaf: Leaf,
    'message-square': MessageSquare,
    theater: Theater,
    library: Library,
    monitor: Monitor,
};

export default function StudentLifePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[500px] overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"
                        alt="Student Life"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                    <div className="text-white">
                        <h1 className="mb-4 text-5xl font-bold">Student Life at Aravalli Academy</h1>
                        <p className="text-xl">
                            Beyond academics - building character, skills, and memories
                        </p>
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">
                            Extracurricular Activities
                        </h2>
                        <p className="text-lg text-gray-600">
                            Holistic development through diverse activities and programs
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {STUDENT_ACTIVITIES.map((activity) => {
                            const Icon = iconMap[activity.icon as keyof typeof iconMap];
                            return (
                                <div
                                    key={activity.id}
                                    className="group overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl"
                                >
                                    <div className="relative h-64 w-full">
                                        <Image
                                            src={activity.image}
                                            alt={activity.title}
                                            fill
                                            className="object-cover transition duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <div className="mb-2 inline-block rounded-full bg-white/20 p-3 backdrop-blur-sm">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-2xl font-bold">{activity.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="mb-4 text-gray-600">{activity.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {activity.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Clubs & Societies */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Clubs & Societies</h2>
                        <p className="text-lg text-gray-600">
                            Join a community of like-minded students pursuing shared interests
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {CLUBS_SOCIETIES.map((club) => {
                            const Icon = iconMap[club.icon as keyof typeof iconMap];
                            return (
                                <div
                                    key={club.name}
                                    className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                                >
                                    <div className="mb-4 inline-block rounded-full bg-blue-100 p-4">
                                        <Icon className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-gray-900">{club.name}</h3>
                                    <p className="text-gray-600">{club.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="bg-gradient-to-br from-gray-50 to-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">World-Class Facilities</h2>
                        <p className="text-lg text-gray-600">
                            Modern infrastructure supporting every aspect of student development
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {SCHOOL_FACILITIES.map((facility) => {
                            const Icon = iconMap[facility.icon as keyof typeof iconMap];
                            return (
                                <div
                                    key={facility.name}
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg"
                                >
                                    <div className="rounded-full bg-green-100 p-3">
                                        <Icon className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-bold text-gray-900">{facility.name}</h3>
                                        <p className="text-sm text-gray-600">{facility.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Annual Events */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Annual Events</h2>
                        <p className="text-lg text-gray-600">
                            Celebrating achievements and creating lasting memories
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {ANNUAL_EVENTS.map((event) => (
                            <div
                                key={event.title}
                                className="rounded-lg border-l-4 border-blue-600 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm transition hover:shadow-md"
                            >
                                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-600">
                                    <Calendar className="h-4 w-4" />
                                    {event.month}
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-gray-900">{event.title}</h3>
                                <p className="text-gray-600">{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16 text-white">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-3xl font-bold">
                        Experience Life at Aravalli Academy
                    </h2>
                    <p className="mb-8 text-lg text-blue-100">
                        Join us to discover your potential, make lifelong friends, and create
                        unforgettable memories
                    </p>
                    <a
                        href="/contact"
                        className="inline-block rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
                    >
                        Schedule a Campus Visit
                    </a>
                </div>
            </section>
        </main>
    );
}
