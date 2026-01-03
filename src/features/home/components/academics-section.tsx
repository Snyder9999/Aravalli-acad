import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ACADEMICS_CARDS } from '@/constants';

export function AcademicsSection() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">Education for Every Stage</h2>
                    <p className="text-lg text-gray-600">
                        Comprehensive curriculum from foundation to higher secondary
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {ACADEMICS_CARDS.map((card) => (
                        <div
                            key={card.id}
                            className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl"
                        >
                            <div className="flex flex-1 flex-col p-6">
                                <div className="mb-4 flex-1">
                                    <h3 className="mb-2 text-2xl font-bold text-gray-900">{card.title}</h3>
                                    <p className="mb-1 text-sm font-semibold text-blue-600">{card.subtitle}</p>
                                    <p className="text-gray-600">{card.description}</p>
                                </div>
                                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                                    <Link href={card.link}>View Details</Link>
                                </Button>
                            </div>
                            <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 transition-all group-hover:h-2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
