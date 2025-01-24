import React from 'react';
import Layout from './layout';
import ProductManagement from '../components/ProductManagement';

const HomePage: React.FC = () => {
    return (
        <Layout>
            <h1>Welcome to ShopSmart</h1>
            <p>Your one-stop shop for all your needs!</p>
            <ProductManagement />
        </Layout>
    );
};

export default HomePage;
