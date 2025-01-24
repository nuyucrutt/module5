import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2023 ShopSmart. All rights reserved.</p>
            <nav>
                <ul className="flex justify-center space-x-4">
                    <li><Link className="text-white" href="/">Home</Link></li>
                    <li><Link className="text-white" href="/products">Products</Link></li>
                    <li><Link className="text-white" href="/categories">Categories</Link></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
