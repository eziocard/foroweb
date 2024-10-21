import express from 'express';
const app = express();
const port = 3000;
import cors from 'cors'; 

app.use(cors());
app.use(express.json()); // Para parsear JSON
app.use(express.urlencoded({ extended: true })); // Para parsear formularios

app.get('/register', (req, res) => {
  console.log('GET request to /register');
  res.send('Hello World!');
});

app.post('/register', (req, res) => {
  const { username, age, email, password } = req.body;
  console.log('Datos recibidos:', { username, age, email, password });
  res.json({ message: 'Datos ingresados correctamente' }); 
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

