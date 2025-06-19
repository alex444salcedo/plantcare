import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import plantRoutes from './src/routes/plantRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import contactRoutes from './src/routes/contactRoutes.js';
import recordRoutes from './src/routes/recordRoutes.js'; //  rutas de recordatorios

// Configuración de multer para manejar archivos
const upload = multer({ dest: 'uploads/' });

// Crear aplicación Express
const app = express();

// Middleware
app.use(cors()); // Permitir solicitudes desde todos los orígenes
app.use(bodyParser.json()); // Para que el servidor pueda recibir JSON

// Servir archivos estáticos desde la carpeta 'uploads'
app.use('/uploads', express.static('uploads'));

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de PlantCare!');
});

// Rutas
app.use('/api/plants', plantRoutes); // Rutas de plantas
app.use('/api/auth', authRoutes); // Rutas de autenticación
app.use('/api/contact', contactRoutes); // Rutas de contacto // Rutas de recordatorios
app.use('/api/recordatorios',recordRoutes);// Rutas de recordatorios
console.log("Ruta de recordatorios montada en /api/recordatorios");

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
