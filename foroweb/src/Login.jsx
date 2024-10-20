import React from 'react';
import './Login.css';

const Login = () => {
  return (
  <form>
      <div>
        <label>Email</label>
        <input type= 'Email'required></input>
      </div>

      <div>
        <label>Password</label>
        <input type ='password' required></input>
      </div>

      <button type = 'submit'>Login</button>

  </form>

  );
};
export default Login;
