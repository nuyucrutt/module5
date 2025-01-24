import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md">
            <ul className="flex space-x-4">
                <li><Link className="text-gray-800" href="/">Serch</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
