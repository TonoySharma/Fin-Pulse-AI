import ProfilePage from '@/components/ProfilePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Profile",
 
};


const MyProfilePage = () => {
    return (
        <div>
            <ProfilePage></ProfilePage>
        </div>
    );
};

export default MyProfilePage;