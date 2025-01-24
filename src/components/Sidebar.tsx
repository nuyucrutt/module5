import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/admin">Admin</a></li>
                    <li><a href="/user">User</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/categories">Categories</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
