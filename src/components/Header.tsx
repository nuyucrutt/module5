import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-green-500 text-white p-4">
            <Link href="/">
                <img src="/logo.png" alt="ShopSmart Logo" className="h-8" />
            </Link>
            <h1>ShopSmart</h1>
            <blockquote className="italic">Your one-stop shop for all your needs!</blockquote>
        </header>
    );
};

export default Header;
