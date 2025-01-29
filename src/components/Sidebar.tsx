"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
    id: number;
    title: string;
}

const Sidebar: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    return (
        <div className="sidebar">
            <h2>Admin Menu</h2>
            <ul>
                <li>
                    <Link href="/admin/sales">Sales Dashboard</Link>
                </li>
                <li>
                    <Link href="/admin/products">Product Management</Link>
                </li>
                <li>
                    <Link href="/admin/categories">Category Management</Link>
                </li>
                <li>
                    <Link href="/admin/users">User Management</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
