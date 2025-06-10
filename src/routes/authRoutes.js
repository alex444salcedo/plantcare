import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Ruta de registro
router.post('/register', registerUser);

// Ruta de login
router.post('/login', loginUser);

export default router;
