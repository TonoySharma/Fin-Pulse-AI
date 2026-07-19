import ProductForm from '@/components/AddProduct';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Add New Card",
    
};

const AddProductPage = () => {
    return (
        <div>
            <ProductForm></ProductForm>
        </div>
    );
};

export default AddProductPage;