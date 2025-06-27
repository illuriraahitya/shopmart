import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">Shopmart</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
  <li className="nav-item">
    <Link className="nav-link" to="/products">Products</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/cart">Cart</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/login">Login</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/register">Register</Link>
  </li>
</ul>

          </div>
        </div>
      </nav>

      <main
        className="container mt-5"
        style={{
          flex: 1,
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center">
                <h1 className="display-4">Welcome to Shopmart!</h1>
                <p className="lead">
                  Your digital grocery store experience.
                </p>
                <Link className="btn btn-light btn-lg mt-3" to="/products">
                  Start Shopping
                </Link>
              </div>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <footer className="bg-dark text-light text-center p-3 mt-5">
        © 2025 Shopmart. All rights reserved.
      </footer>
    </>
  )
}

export default App
