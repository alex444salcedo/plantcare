import express from 'express';
import pool from '../config/db.js';
import multer from 'multer';  // Para manejar la subida de archivos
import jwt from 'jsonwebtoken';

// Configuración de multer para manejar la subida de imágenes de las plantas
const upload = multer({ dest: 'uploads/' });  // Las imágenes se guardarán en la carpeta 'uploads/'

const router = express.Router();

// Middleware para verificar el token JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];  // Obtener el token del encabezado
  if (!token) {
    console.log('Acceso denegado: No se proporcionó un token');
    return res.status(403).send('Acceso denegado: No se proporcionó un token');
  }

  jwt.verify(token, 'tu_clave_secreta', (err, user) => {  // 'tu_clave_secreta' debe ser la misma que usas al generar el token
    if (err) {
      console.log('Acceso denegado: Token inválido');
      return res.status(403).send('Acceso denegado: Token inválido');
    }
    req.user = user;  // Asignar el usuario verificado al objeto req
    next();  // Continuar con la siguiente función (la ruta real)
  });
};

// Ruta para obtener todas las plantas de un usuario
router.get('/user/:usuario_id', verifyToken, async (req, res) => {
  const { usuario_id } = req.params;

  console.log(`Solicitando plantas para el usuario: ${usuario_id}`);

  try {
    // Consultamos las plantas asociadas al usuario
    const [rows] = await pool.query('SELECT * FROM plantas WHERE usuario_id = ?', [usuario_id]);
    console.log('Plantas obtenidas:', rows);
    res.json(rows);  // Devolvemos las plantas en formato JSON
  } catch (error) {
    console.error('Error al obtener las plantas:', error.message);
    res.status(500).send('Error al obtener las plantas');
  }
});

// Ruta para agregar una nueva planta
router.post('/add', upload.single('foto'), verifyToken, async (req, res) => {
  const { nombre, ubicacion, fecha_adquisicion, tipo, usuario_id } = req.body;
  const foto = req.file ? `http://localhost:5000/uploads/${req.file.filename}` : null;  // URL de la imagen subida

  console.log('Datos recibidos para agregar una planta:', { nombre, ubicacion, fecha_adquisicion, tipo, usuario_id, foto });

  // Validamos que los datos sean correctos
  if (!nombre || !ubicacion || !fecha_adquisicion || !tipo || !usuario_id) {
    console.log('Faltan datos en la planta');
    return res.status(400).send('Todos los campos son obligatorios');
  }

  try {
    // Insertamos la nueva planta en la base de datos
    const [result] = await pool.query(
      'INSERT INTO plantas (nombre, ubicacion, fecha_adquisicion, tipo, foto, usuario_id) VALUES (?, ?, ?, ?, ?, ?)',
      [nombre, ubicacion, fecha_adquisicion, tipo, foto, usuario_id]
    );
    console.log('Planta agregada con éxito:', { id: result.insertId, nombre });
    res.status(201).json({
      id: result.insertId,
      nombre,
      ubicacion,
      fecha_adquisicion,
      tipo,
      foto,
      usuario_id,
    });  // Respondemos con la planta recién agregada
  } catch (error) {
    console.error('Error al insertar la planta:', error.message);
    res.status(500).send('Error al insertar la planta');
  }
});

// Ruta para editar una planta existente
router.put('/update/:id', upload.single('foto'), verifyToken, async (req, res) => {
  const { id } = req.params;  // ID de la planta a editar
  const { nombre, ubicacion, fecha_adquisicion, tipo, usuario_id } = req.body;
  const foto = req.file ? `http://localhost:5000/uploads/${req.file.filename}` : null;  // Nueva foto si la hay

  console.log('Datos recibidos para editar la planta:', { id, nombre, ubicacion, fecha_adquisicion, tipo, usuario_id, foto });

  // Validamos que los datos sean correctos
  if (!nombre || !ubicacion || !fecha_adquisicion || !tipo || !usuario_id) {
    console.log('Faltan datos en la planta a editar');
    return res.status(400).send('Todos los campos son obligatorios');
  }

  try {
    // Actualizamos la planta en la base de datos
    const [result] = await pool.query(
      'UPDATE plantas SET nombre = ?, ubicacion = ?, fecha_adquisicion = ?, tipo = ?, foto = ? WHERE id = ? AND usuario_id = ?',
      [nombre, ubicacion, fecha_adquisicion, tipo, foto, id, usuario_id]
    );

    if (result.affectedRows === 0) {
      console.log('Planta no encontrada o no perteneciente a este usuario');
      return res.status(404).send('Planta no encontrada o no perteneciente a este usuario');
    }

    console.log('Planta actualizada con éxito');
    res.status(200).send('Planta actualizada con éxito');
  } catch (error) {
    console.error('Error al actualizar la planta:', error.message);
    res.status(500).send('Error al actualizar la planta');
  }
});

// Ruta para eliminar una planta
router.delete('/delete/:id', verifyToken, async (req, res) => {
  const { id } = req.params;  // ID de la planta a eliminar
  const usuario_id = req.user.id;  // Obtener el ID del usuario desde el token

  console.log(`Eliminando planta con ID: ${id}, para el usuario: ${usuario_id}`);

  try {
    // Eliminar la planta de la base de datos
    const [result] = await pool.query(
      'DELETE FROM plantas WHERE id = ? AND usuario_id = ?',
      [id, usuario_id]
    );

    if (result.affectedRows === 0) {
      console.log('Planta no encontrada o no perteneciente a este usuario');
      return res.status(404).send('Planta no encontrada o no perteneciente a este usuario');
    }

    console.log('Planta eliminada con éxito');
    res.status(200).send('Planta eliminada con éxito');
  } catch (error) {
    console.error('Error al eliminar la planta:', error.message);
    res.status(500).send('Error al eliminar la planta');
  }
});


export default router;
