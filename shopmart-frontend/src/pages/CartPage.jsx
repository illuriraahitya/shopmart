import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, placeOrder } = useContext(CartContext);
  const user = JSON.parse(localStorage.getItem('user'));

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.container}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} style={styles.item}>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item._id)}>
                Remove
              </button>
            </div>
          ))}

          <p><strong>Total:</strong> ₹{total}</p>

          {user && cartItems.length > 0 && (
            <button style={styles.button} onClick={() => placeOrder(user)}>
              Place Order
            </button>
          )}
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial'
  },
  item: {
    border: '1px solid #ccc',
    marginBottom: '10px',
    padding: '10px'
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default CartPage;
