import ManageItemsPage from '@/components/ManageItems';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Features | FinPulse AI",
  description:
    "Manage, update, and organize your financial Features efficiently with FinPulse AI's smart management tools.",
};



const ManageItmsPage = () => {
  return (
    <div>
       <ManageItemsPage></ManageItemsPage>
    </div>
  );
};

export default ManageItmsPage;