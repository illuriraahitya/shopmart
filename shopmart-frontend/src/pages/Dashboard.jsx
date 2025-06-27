import React, { useEffect, useState } from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) return (window.location.href = '/login');
    const parsed = JSON.parse(stored);
    setUser(parsed);
  }, []);

  if (!user) return <p>Loading...</p>;

  return user.isAdmin ? <AdminDashboard user={user} /> : <UserDashboard user={user} />;
};

export default Dashboard;
