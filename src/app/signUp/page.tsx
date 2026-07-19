import RegisterPage from '@/components/SignUoSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sign Up | FinPulse AI",
  description:
    "Join FinPulse AI to manage your finances smarter with AI-powered expense tracking and financial insights.",
};


const SignUpPage = () => {
    return (
        <div>
            <RegisterPage></RegisterPage>
        </div>
    );
};

export default SignUpPage;