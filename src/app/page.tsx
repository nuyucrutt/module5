import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <main>
                    <h1>Welcome to ShopSmart</h1>
                    <p>Your one-stop shop for all your needs!</p>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
