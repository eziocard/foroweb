import React from 'react';
import './Register.css';

const Register = () => {
  return (
  <form>
      <div>
        <label>Username</label>
        <input type= 'text'></input>
      </div>
      <div>
        <label>Age</label>
        <input type = 'number' min = '18' ></input>
      </div>
      <div>
        <label>Email</label>
        <input type= 'Email'></input>
      </div>

      <div>
        <label>Password</label>
        <input type ='password'></input>
      </div>

      <button type = 'submit'>Ready</button>

  </form>
  );
};

export default Register;

