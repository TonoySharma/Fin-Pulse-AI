import LoginPage from '@/components/LogInSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Login | FinPulse AI",
    description:
        "Securely log in to FinPulse AI and manage your finances with smart AI-powered tools and insights.",
};


const LogInPage = () => {
    return (
        <div>
            <LoginPage></LoginPage>
        </div>
    );
};

export default LogInPage;