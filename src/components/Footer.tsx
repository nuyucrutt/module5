import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 text-center">
            <p className="mb-4">&copy; 2023 NHShop. All rights reserved.</p>
            <nav>
                <ul className="flex justify-center space-x-6">
                    <li><Link className="text-white hover:text-gray-300 transition-colors duration-300" href="/">Home</Link></li>
                    <li><Link className="text-white hover:text-gray-300 transition-colors duration-300" href="/products">Products</Link></li>
                    <li><Link className="text-white hover:text-gray-300 transition-colors duration-300" href="/categories">Categories</Link></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
