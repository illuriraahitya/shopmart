import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.product._id === product._id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="home-container">
      <h1>🛒 Welcome to ShopMart</h1>
      <p>Your smart digital grocery store.</p>

      <div className="home-buttons">
        <Link to="/login"><button className="home-button">Login</button></Link>
        <Link to="/register"><button className="home-button">Register</button></Link>
        <Link to="/cart"><button className="home-button">Cart</button></Link>
      </div>

      <h2 style={{ marginTop: '40px' }}>Available Products</h2>
      <div className="home-products">
        {products.map(product => (
          <div key={product._id} className="home-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>₹{product.price}</strong></p>
            {product.stock > 0 ? (
              <button onClick={() => addToCart(product)} className="home-cart-button">
                Add to Cart
              </button>
            ) : (
              <p style={{ color: 'red' }}>Out of stock</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
