import React from 'react';
import ProductManagement from './ProductManagement';
import CategoryManagement from './CategoryManagement';
import UserManagement from './UserManagement';
import SalesManagement from './SalesManagement';

const AdminView: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <SalesManagement />
            <ProductManagement />
            <CategoryManagement />
            <UserManagement />
        </div>
    );
};

export default AdminView;
