import React, { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

const UserManagement: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [newUserName, setNewUserName] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/users');
            const data = await response.json();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    const handleAddUser = async () => {
        const response = await fetch('https://api.escuelajs.co/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newUserName, email: newUserEmail }),
        });
        const newUser = await response.json();
        setUsers([...users, newUser]);
        setNewUserName('');
        setNewUserEmail('');
    };

    return (
        <div>
            <h2 className="text-xl">User Management</h2>
            <input 
                type="text" 
                value={newUserName} 
                onChange={(e) => setNewUserName(e.target.value)} 
                placeholder="New User Name"
                className="border p-2"
            />
            <input 
                type="email" 
                value={newUserEmail} 
                onChange={(e) => setNewUserEmail(e.target.value)} 
                placeholder="New User Email"
                className="border p-2"
            />
            <button onClick={handleAddUser} className="bg-blue-500 text-white p-2">Add User</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
