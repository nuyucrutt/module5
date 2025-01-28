import React from 'react';
import Link from 'next/link';


interface HeaderProps {
    cartAmount: number; // Prop to receive cart amount
}

const Header: React.FC<HeaderProps> = ({ cartAmount }) => {
    return (
        <header className="bg-pink-500 text-white p-4 flex justify-between items-center">
            <Link href="/">
                <img src="/logo.png" alt="ShopSmart Logo" className="h-8" />
            </Link>
            <h1>NHShop</h1>
            <blockquote className="italic">Your one-stop shop for all your needs!</blockquote>
            <Link href="/cart" className="text-white">Cart ({cartAmount})</Link> {/* Display cart amount */}
        </header>
    );
};

export default Header;
