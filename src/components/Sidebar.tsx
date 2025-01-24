import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    return (
        <aside className="bg-gray-200 w-64 p-4">
            <nav>
                <ul className="space-y-2">
                    <li><Link className="text-gray-800" href="/">Home</Link></li>
                    <li><Link className="text-gray-800" href="/admin">Admin</Link></li>
                    <li><Link className="text-gray-800" href="/user">User</Link></li>
                    <li><Link className="text-gray-800" href="/products">Products</Link></li>
                    <li><Link className="text-gray-800" href="/categories">Categories</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
