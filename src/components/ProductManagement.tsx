import React, { useEffect, useState } from 'react';

interface Product {
    id: number;
    title: string;
}

const ProductManagement: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [newTitle, setNewTitle] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    const handleEdit = (product: Product) => {
        setEditingProduct(product);
        setNewTitle(product.title);
    };

    const handleUpdate = async () => {
        if (editingProduct) {
            await fetch(`https://api.escuelajs.co/api/v1/products/${editingProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: newTitle }),
            });
            setEditingProduct(null);
            setNewTitle('');
            // Refresh the product list
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await response.json();
            setProducts(data);
        }
    };

    return (
        <div>
            <h2 className="text-xl">Product Management</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.title} 
                        <button onClick={() => handleEdit(product)}>Edit</button>
                    </li>
                ))}
            </ul>
            {editingProduct && (
                <div>
                    <input 
                        type="text" 
                        value={newTitle} 
                        onChange={(e) => setNewTitle(e.target.value)} 
                    />
                    <button onClick={handleUpdate}>Update</button>
                </div>
            )}
        </div>
    );
};

export default ProductManagement;
