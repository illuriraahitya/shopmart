import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>ShopMart</h2>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: '1rem',
    background: '#1e90ff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
  },
  logo: { margin: 0 },
  nav: { display: 'flex', gap: '1rem' },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Header;
