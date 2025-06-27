import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user, onLogout }) => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.button}>Home</Link>
      <Link to="/products" style={styles.button}>Products</Link>
      <Link to="/cart">Cart</Link>

      {user ? (
        <>
          <Link to={user.isAdmin ? "/admin-dashboard" : "/user-dashboard"} style={styles.button}>
            Dashboard
          </Link>
          <button onClick={onLogout} style={styles.logoutButton}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={styles.button}>Login</Link>
          <Link to="/register" style={styles.button}>Register</Link>
        </>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    padding: '10px',
    background: '#f0f0f0',
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  button: {
    textDecoration: 'none',
    backgroundColor: '#0d6efd',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
  }
};

export default NavBar;
