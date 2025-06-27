import React from 'react'

const Login = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
