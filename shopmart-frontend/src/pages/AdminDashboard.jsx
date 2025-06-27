import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = ({ user }) => {
  return (
    <div style={styles.page}>
      <h2>Welcome Admin, {user.name}</h2>
      <p>You have access to manage products, orders, and users.</p>

      <div style={styles.buttons}>
        <Link to="/admin-products">
          <button style={styles.button}>Manage Products</button>
        </Link>
        <Link to="/admin-orders">
          <button style={styles.button}>Manage Orders</button>
        </Link>
        <Link to="/admin-users">
          <button style={styles.button}>Manage Users</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial'
  },
  buttons: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#0d6efd',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default AdminDashboard;
