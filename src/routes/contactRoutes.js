import express from 'express';
import { addContact } from '../controllers/contactController.js'; // Asegúrate de importar el controlador correctamente

const router = express.Router();

// Ruta para manejar el formulario de contacto (POST)
router.post('/', addContact);  // Asegúrate de que esto sea un POST

export default router;
