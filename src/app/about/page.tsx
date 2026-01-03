import Image from 'next/image';
import { SCHOOL_INFO, PRINCIPAL_MESSAGE, STATS } from '@/constants';
import { Target, Eye, Award } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-4 text-5xl font-bold">About Us</h1>
                    <p className="text-xl">Building futures through quality education since {SCHOOL_INFO.established}</p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-4xl font-bold text-gray-900">Our Story</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Established in {SCHOOL_INFO.established}, Aravalli Academy has been at the forefront of
                                    providing quality education to students from Class 1 to 12. Our journey began with a
                                    simple vision: to create an institution where every child receives personalized
                                    attention and holistic development.
                                </p>
                                <p>
                                    Over the years, we have grown into a trusted name in education, affiliated with SEBA
                                    (Secondary Education Board of Assam), offering both Science and Arts streams at the
                                    higher secondary level. Our commitment to excellence is reflected in our consistent
                                    board results and the success stories of our alumni.
                                </p>
                                <p>
                                    We believe that education is not just about academic achievement but about nurturing
                                    well-rounded individuals who are equipped to face the challenges of tomorrow with
                                    confidence and integrity.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                                alt="School Campus"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-8 shadow-lg">
                            <div className="mb-4 inline-block rounded-full bg-blue-100 p-4">
                                <Eye className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">Our Vision</h3>
                            <p className="leading-relaxed text-gray-700">
                                To be a leading educational institution that empowers students with knowledge, skills,
                                and values to become responsible global citizens and lifelong learners.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-gradient-to-br from-green-50 to-white p-8 shadow-lg">
                            <div className="mb-4 inline-block rounded-full bg-green-100 p-4">
                                <Target className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">Our Mission</h3>
                            <p className="leading-relaxed text-gray-700">
                                To provide quality education that fosters academic excellence, critical thinking,
                                creativity, and character development in a supportive and inclusive environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {STATS.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="mb-2 text-5xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm font-medium text-blue-100">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Principal's Message */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Message from the Principal</h2>
                    </div>

                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="relative mx-auto h-[500px] w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src={PRINCIPAL_MESSAGE.image}
                                alt={PRINCIPAL_MESSAGE.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-4 text-gray-700">
                            {PRINCIPAL_MESSAGE.message.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="leading-relaxed">
                                    {paragraph.trim()}
                                </p>
                            ))}
                            <div className="mt-6 border-l-4 border-blue-600 pl-4">
                                <p className="font-semibold text-gray-900">{PRINCIPAL_MESSAGE.name}</p>
                                <p className="text-sm text-gray-600">{PRINCIPAL_MESSAGE.designation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
