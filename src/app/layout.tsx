import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Header />
            <Navbar />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
