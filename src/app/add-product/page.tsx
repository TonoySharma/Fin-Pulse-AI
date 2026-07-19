import ProductForm from '@/components/AddProduct';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Add New Card | FinPulse AI",
    description:
        "Add a new payment card to your FinPulse AI account and manage your financial transactions securely.",
};

const AddProductPage = () => {
    return (
        <div>
            <ProductForm></ProductForm>
        </div>
    );
};

export default AddProductPage;