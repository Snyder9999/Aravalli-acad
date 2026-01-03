import { HeroSection } from '@/features/home/components/hero-section';
import { TrustBadges } from '@/features/home/components/trust-badges';
import { AcademicsSection } from '@/features/home/components/academics-section';
import { WhyChooseUs } from '@/features/home/components/why-choose-us';
import { FeeStructure } from '@/features/home/components/fee-structure';
import { PrincipalMessage } from '@/features/home/components/principal-message';
import { StatsBar } from '@/features/home/components/stats-bar';
import { EnquiryForm } from '@/features/home/components/enquiry-form';

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <TrustBadges />
            <AcademicsSection />
            <WhyChooseUs />
            <FeeStructure />
            <PrincipalMessage />
            <StatsBar />
            <EnquiryForm />
        </main>
    );
}
