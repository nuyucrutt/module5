"use client";

import React, { useEffect, useState } from 'react';

interface Category {
    id: number;
    name: string;
}

const CategoryManagement: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [newCategoryName, setNewCategoryName] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/categories');
            const data = await response.json();
            setCategories(data);
        };

        fetchCategories();
    }, []);

    const handleAddCategory = async () => {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newCategoryName }),
        });
        const newCategory = await response.json();
        setCategories([...categories, newCategory]);
        setNewCategoryName('');
    };

    return (
        <div>
            <h2 className="text-xl">Category Management</h2>
            <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="New Category Name"
                className="border p-2"
            />
            <button onClick={handleAddCategory} className="bg-blue-500 text-white p-2">Add Category</button>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryManagement;
