// Registro
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/db.js';

// Registrar un nuevo usuario
export const registerUser = async (req, res) => {
  const { email, password, name, location } = req.body;

  if (!email || !password || !name || !location) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    // Verificar si el usuario ya existe
    const [userExists] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (userExists.length > 0) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar el nuevo usuario
    const [result] = await pool.execute(
      'INSERT INTO users (email, password_hash, name, location) VALUES (?, ?, ?, ?)',
      [email, hashedPassword, name, location]
    );

    // Generar el JWT
    const token = jwt.sign({ userId: result.insertId }, 'SECRET_KEY', { expiresIn: '1h' });

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
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Correo y contraseña son requeridos' });
  }

  try {
    // Buscar el usuario en la base de datos
    const [user] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (user.length === 0) {
      return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user[0].password_hash);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    // Generar JWT
    const token = jwt.sign({ userId: user[0].id }, 'SECRET_KEY', { expiresIn: '1h' });

    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};
