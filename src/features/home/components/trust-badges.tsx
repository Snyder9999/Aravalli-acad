import { Award, Users, Monitor, Trophy, Heart } from 'lucide-react';
import { TRUST_BADGES } from '@/constants';

const iconMap = {
    award: Award,
    users: Users,
    monitor: Monitor,
    trophy: Trophy,
    heart: Heart,
};

export function TrustBadges() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {TRUST_BADGES.map((badge, index) => {
                        const Icon = iconMap[badge.icon as keyof typeof iconMap];
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-3 rounded-lg p-6 text-center shadow-md transition hover:shadow-lg"
                            >
                                <div className="rounded-full bg-blue-100 p-4">
                                    <Icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <p className="text-sm font-semibold text-gray-800">{badge.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
