import FeaturesPage from '@/components/AllFeatures';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "All Features | FinPulse AI",
    description:
        "Discover powerful AI-driven financial management features with FinPulse AI.",
};

const AllFeaturesPage = () => {
    return (
        <div>
            <FeaturesPage></FeaturesPage>
        </div>
    );
};

export default AllFeaturesPage;