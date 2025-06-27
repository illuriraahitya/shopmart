import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
  }, [])

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product.name)
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Available Products</h2>

      {products.length === 0 ? (
        <div className="alert alert-warning text-center">
          No products available!
        </div>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product._id}>
              <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
                isAdmin={true}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Products
