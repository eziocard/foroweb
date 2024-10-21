import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar la redirección del formulario

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      setMessage(jsonResponse.message); // Mostrar el mensaje de éxito
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type='text' name='username'></input>
        </div>
        <div>
          <label>Age</label>
          <input type='number' min='18' name='age'></input>
        </div>
        <div>
          <label>Email</label>
          <input type='email' name='email'></input>
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password'></input>
        </div>

        <button type='submit'>Ready</button>
      </form>
      {message && <p>{message}</p>} 
    </div>
  );
};

export default Register;

