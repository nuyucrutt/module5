import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside className="bg-gray-200 w-64 p-4">
            <nav>
                <ul className="space-y-2">
                    <li><a className="text-gray-800" href="/">Home</a></li>
                    <li><a className="text-gray-800" href="/admin">Admin</a></li>
                    <li><a className="text-gray-800" href="/user">User</a></li>
                    <li><a className="text-gray-800" href="/products">Products</a></li>
                    <li><a className="text-gray-800" href="/categories">Categories</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
