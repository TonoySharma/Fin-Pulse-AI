import ProfilePage from '@/components/ProfilePage';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Profile | FinPulse AI",
    description:
        "View and manage your personal profile information on FinPulse AI. Update your account details and access your financial dashboard.",
};


const MyProfilePage = () => {
    return (
        <div>
            <ProfilePage></ProfilePage>
        </div>
    );
};

export default MyProfilePage;