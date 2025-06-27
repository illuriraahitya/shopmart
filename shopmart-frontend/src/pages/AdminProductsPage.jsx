import React, { useEffect, useState } from 'react';

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    stock: ''
  });
  const [editId, setEditId] = useState(null);

  // Fetch all products
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editId ? 'PUT' : 'POST';
    const url = editId
      ? `http://localhost:5000/api/products/${editId}`
      : 'http://localhost:5000/api/products';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert(editId ? '✅ Product updated!' : '✅ Product added!');
      window.location.reload();
    } else {
      alert('❌ Something went wrong');
    }
  };

  const handleEdit = (product) => {
    setEditId(product._id);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure?')) return;
    const res = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      alert('✅ Product deleted!');
      window.location.reload();
    } else {
      alert('❌ Something went wrong');
    }
  };

  return (
    <div style={styles.container}>
      <h2>🛠️ Admin - Product Management</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editId ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <h3>Existing Products</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price (₹)</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>₹{p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button onClick={() => handleEdit(p)}>Edit</button>{' '}
                <button onClick={() => handleDelete(p._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial'
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  }
};

export default AdminProductsPage;
