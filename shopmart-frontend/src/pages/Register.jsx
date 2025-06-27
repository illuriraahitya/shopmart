import React from 'react'

const Register = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <h2 className="text-center mb-4">Register</h2>
        <form>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Enter name" />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <button className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register