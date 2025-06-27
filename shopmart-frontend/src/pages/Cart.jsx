import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const removeItem = (id) => {
    const updated = cart.filter(item => item.product._id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div style={styles.container}>
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.product._id} style={styles.item}>
                <strong>{item.product.name}</strong> (x{item.quantity}) - ₹{item.product.price}
                <button onClick={() => removeItem(item.product._id)} style={styles.remove}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial'
  },
  item: {
    marginBottom: '10px'
  },
  remove: {
    marginLeft: '10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Cart;
