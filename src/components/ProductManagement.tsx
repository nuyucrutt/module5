import React, { useEffect, useState } from 'react';

interface Product {
    id: number;
    title: string;
}

const ProductManagement: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [newProductTitle, setNewProductTitle] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    const handleAddProduct = async () => {
        const response = await fetch('https://api.escuelajs.co/api/v1/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: newProductTitle }),
        });
        const newProduct = await response.json();
        setProducts([...products, newProduct]);
        setNewProductTitle('');
    };

    return (
        <div>
            <h2 className="text-xl">Product Management</h2>
            <input 
                type="text" 
                value={newProductTitle} 
                onChange={(e) => setNewProductTitle(e.target.value)} 
                placeholder="New Product Title"
                className="border p-2"
            />
            <button onClick={handleAddProduct} className="bg-blue-500 text-white p-2">Add Product</button>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductManagement;
