// server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import plantRoutes from './src/routes/plantRoutes.js'; // Asegúrate de que esta ruta esté bien
import authRoutes from './src/routes/authRoutes.js'; // Importa las rutas de autenticación


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Para que el servidor pueda recibir JSON

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de PlantCare!');
});

// Rutas
app.use('/api/plants', plantRoutes); // Aquí se manejan las rutas para las plantas
app.use('/api/auth', authRoutes); // Aquí usamos las rutas de autenticación


// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
