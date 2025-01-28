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

interface ProductListProps {
    setCartAmount: React.Dispatch<React.SetStateAction<number>>;
}

const ProductList: React.FC<ProductListProps> = ({ setCartAmount }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    // Removed local cartAmount state
    const router = useRouter();

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
        setCartAmount(cartAmount + 1); // Update cart amount
        alert(`Added to cart! Total items: ${cartAmount + 1}`); // Notification
    };

    const handleRemoveFromCart = (id: number) => {
        setCart(cart.filter(item => item.id !== id));
        setCartAmount(cartAmount - 1); // Update cart amount
    };

    const handleRemoveAllFromCart = () => {
        setCart([]);
        setCartAmount(0); // Reset cart amount
    };

    const handleCheckout = () => {
        router.push('/payment');
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Product List</h2>
            <ul className="space-y-4">
                {products.map(product => (
                    <li key={product.id} className="flex justify-between items-center border p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center">
                            <img src={product.images[0]} alt={product.title} className="w-16 h-16 object-cover mr-4" />
                            <span className="text-lg">{product.title} - ${product.price}</span>
                        </div>
                        <button onClick={() => handleAddToCart(product)} className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors duration-300">Add to Cart</button>
                    </li>
                ))}
            </ul>
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
