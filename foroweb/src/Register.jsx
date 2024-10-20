import React from 'react';
import './Register.css';

const{MongoClient} = require("mongodb");
const url = 'mongodb+srv://tarea_bigdata:admin..@cluster0.1578n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const client = new MongoClient(url);

async function run(data){
  try{
    const database = client.db('forodb');
    const usuarios = database.collection('usuarios');
    const query = await usuarios.insertOne(data);
  }finally{
    await client.close();
  }
}
const Register = () => {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    const formData = new FormData(event.target); // Obtener los datos del formulario
    const username = formData.get('username'); // Obtener el valor del campo 'username'
    const age = formData.get('age'); // Obtener el valor del campo 'age'
    const email = formData.get('email'); // Obtener el valor del campo 'email'
    const password = formData.get('password'); // Obtener el valor del campo 'password'

    const data = { username, age, email, password }; // Crear un objeto con los datos desglosados

    await run(data); // Llamar a la función run con el objeto de datos
  };
  return (
  <form>
      <div>
        <label>Username</label>
        <input type= 'text' required></input>
      </div>
      <div>
        <label>Age</label>
        <input type = 'number' min = '18' required></input>
      </div>
      <div>
        <label>Email</label>
        <input type= 'Email' required></input>
      </div>

      <div>
        <label>Password</label>
        <input type ='password' required></input>
      </div>

      <button type = 'submit'>Ready</button>

  </form>
  );
};

export default Register;

