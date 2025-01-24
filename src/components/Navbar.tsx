import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md">
            <ul className="flex space-x-4">
                <li><a className="text-gray-800" href="/">Home</a></li>
                <li><a className="text-gray-800" href="/admin">Admin</a></li>
                <li><a className="text-gray-800" href="/user">User</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
