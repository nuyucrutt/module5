"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for the latest Next.js version


interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const router = useRouter(); // Initialize useRouter

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await response.json();
            console.log(data); // Log the fetched product data
            setProducts(data);
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product: Product) => {
        setCart([...cart, product]);
    };

    const handleRemoveFromCart = (id: number) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const handleRemoveAllFromCart = () => {
        setCart([]);
    };

    const handleCheckout = () => {
        router.push('../app'); // Navigate to the payment page
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className="p-4">
            <h3 className="text-lg mt-6">Cart</h3>
            <ul>
                {cart.map(item => (
                    <li key={item.id} className="flex justify-between items-center">
                        <span>{item.title}</span>
                        <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500">Remove</button>
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <span className="font-bold">Total: ${calculateTotal()}</span>
            </div>
            <button onClick={handleRemoveAllFromCart} className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors duration-300">Remove All</button>
            <button onClick={handleCheckout} className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300">Checkout</button>
        </div>
    );
};

export default ProductList;
