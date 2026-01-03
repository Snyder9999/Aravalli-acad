import { STATS } from '@/constants';

export function StatsBar() {
    return (
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
    );
}
