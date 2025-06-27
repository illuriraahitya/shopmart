// src/context/CartContext.jsx

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existing = cartItems.find((item) => item._id === product._id);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item._id !== productId));
  };

  const placeOrder = async (user) => {
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            product: item._id,
            quantity: item.quantity,
          })),
          totalPrice: cartItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          ),
        }),
      });

      if (response.ok) {
        setCartItems([]);
        alert('✅ Order placed successfully!');
      } else {
        const err = await response.json();
        alert('❌ Failed to place order: ' + err.message);
      }
    } catch (error) {
      alert('❌ Something went wrong while placing the order.');
    }
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        placeOrder,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
