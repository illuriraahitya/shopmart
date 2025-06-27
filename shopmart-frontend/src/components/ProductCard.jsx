import React from 'react'
import phoneImage from '../assets/phone.jpg'
import appleImage from '../assets/apple.jpg'

const getProductImage = (name) => {
  if (name.toLowerCase().includes('apple')) {
    return appleImage;
  }
  return phoneImage;
};

const ProductCard = ({ product, onAddToCart, isAdmin }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={getProductImage(product.name)}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">₹ {product.price}</p>
        <button
          className="btn btn-primary"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
        {isAdmin && (
          <button className="btn btn-danger ms-2">
            Delete
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductCard
