import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-green-500 text-white p-4">
            <img src="/path/to/logo.png" alt="ShopSmart Logo" className="h-8" />
            <h1>ShopSmart</h1>
            <blockquote className="italic">Your one-stop shop for all your needs!</blockquote>
        </header>
    );
};


export default Header;
