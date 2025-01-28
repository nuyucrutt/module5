"use client";

import React, { ReactNode, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../app/style.css'; 
import './globals.css';
import ProductList from '../components/ProductList';
import '../components/cart'
import Navbar from '../components/Navbar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [cartAmount, setCartAmount] = useState<number>(0); // State for cart amount

    return (
        <html>
        <body className="bg-gray-100 text-gray-800">
            <Header cartAmount={cartAmount} /> {/* Pass cartAmount to Header */}
            <Navbar />
            <div className="flex">
                <Sidebar />
                <main className="p-4 flex-1">
                    {children} {/* Render children here */}
                    <ProductList setCartAmount={setCartAmount} /> {/* Pass setCartAmount to ProductList */}
                </main>
            </div>
            <Footer />
        </body>
        </html>
    );
};

export default Layout;
