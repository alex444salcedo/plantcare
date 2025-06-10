// src/routes/plantRoutes.js
import express from 'express';
import pool from '../config/db.js';

const router = express.Router();

// Ruta para obtener todas las plantas del usuario
router.get('/', async (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Acceso no autorizado' });
  }

  try {
    // Aquí deberías verificar el token y obtener el usuario
    const [plants] = await pool.execute('SELECT * FROM plants WHERE user_id = ?', [userId]);
    res.status(200).json({ plants });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las plantas' });
  }
});

export default router;
