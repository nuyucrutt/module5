"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
}

const ProductManagement: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [newProduct, setNewProduct] = useState<Product | null>(null);
    const [updateProductId, setUpdateProductId] = useState<number | null>(null);
    const [deleteProductId, setDeleteProductId] = useState<number | null>(null);

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
            body: JSON.stringify({
                title: "New Product",
                price: 10,
                description: "A description",
                categoryId: 1,
                images: ["https://placeimg.com/640/480/any"]
            }),
        });
        const newProduct = await response.json();
        setProducts([...products, newProduct]);
    };

    const handleUpdateProduct = async () => {
        if (updateProductId) {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${updateProductId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: "Change title",
                    price: 100
                }),
            });
            const updatedProduct = await response.json();
            setProducts(products.map(product => product.id === updateProductId ? updatedProduct : product));
        }
    };

    const handleDeleteProduct = async () => {
        if (deleteProductId) {
            await fetch(`https://api.escuelajs.co/api/v1/products/${deleteProductId}`, {
                method: 'DELETE',
            });
            setProducts(products.filter(product => product.id !== deleteProductId));
        }
    };

    return (
        <div>
            <h2 className="text-xl">Product Management</h2>
            <button onClick={handleAddProduct} className="bg-blue-500 text-white p-2">Add Product</button>
            <button onClick={handleUpdateProduct} className="bg-yellow-500 text-white p-2">Update Product</button>
            <button onClick={handleDeleteProduct} className="bg-red-500 text-white p-2">Delete Product</button>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};
export default ProductManagement;
