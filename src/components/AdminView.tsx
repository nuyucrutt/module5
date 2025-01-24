import React from 'react';
import ProductManagement from './ProductManagement';

const AdminView: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <ProductManagement />
            <div className="mt-4">
                <h2 className="text-xl">Manage Categories</h2>
                {/* Category management functionalities will be implemented here */}
            </div>
            <div className="mt-4">
                <h2 className="text-xl">Manage Users</h2>
                {/* User management functionalities will be implemented here */}
            </div>
        </div>
    );
};

export default AdminView;
