import DetailsPage from '@/components/CardDetails';

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Feature Details | FinPulse AI",
        description:
            "Explore detailed information about this FinPulse AI feature and learn how it helps you manage your finances smarter.",
    };
}


const CardDetailsPage = () => {
    return (
        <div>
            <DetailsPage></DetailsPage>
        </div>
    );
};

export default CardDetailsPage;