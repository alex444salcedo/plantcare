import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/db.js';

// Registrar un nuevo usuario
export const registerUser = async (req, res) => {
  const { correo, password, fecha_registro } = req.body;

  if (!correo || !password || !fecha_registro) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    // Verificar si el usuario ya existe
    const [userExists] = await pool.execute('SELECT * FROM usuarios WHERE correo = ?', [correo]); // Usar `correo` en vez de `email`
    if (userExists.length > 0) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar el nuevo usuario
    const [result] = await pool.execute(
      'INSERT INTO usuarios (correo, contrasena, fecha_registro) VALUES (?, ?, ?)', 
      [correo, hashedPassword, fecha_registro]
    );

    // Generar el JWT
    const token = jwt.sign({ userId: result.insertId }, process.env.JWT_SECRET || 'SECRET_KEY', { expiresIn: '1h' }); // Mover la clave secreta a una variable de entorno

    res.status(201).json({
      message: 'Usuario registrado con éxito',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

// Iniciar sesión
export const loginUser = async (req, res) => {
  const { correo, password } = req.body;

  if (!correo || !password) {
    return res.status(400).json({ message: 'Correo y contraseña son requeridos' });
  }

  try {
    // Buscar el usuario en la base de datos
    const [user] = await pool.execute('SELECT * FROM usuarios WHERE correo = ?', [correo]); // Corregir `email` a `correo`
    if (user.length === 0) {
      return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user[0].contrasena); // Usar el campo correcto `contrasena`
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    // Generar JWT
    const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET || 'SECRET_KEY', { expiresIn: '1h' });

    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};
