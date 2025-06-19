import express from 'express';
import jwt from 'jsonwebtoken';
import pool from '../config/db.js';

// Crear una instancia de enrutador
const router = express.Router();

// Middleware para verificar el token
const verificarToken = (req, res, next) => {
  const token = req.header('Authorization'); // El token se envía en el encabezado Authorization

  console.log('Token recibido:', token); // Verifica que el token esté llegando correctamente

  if (!token) {
    return res.status(403).send('Token requerido');
  }

  jwt.verify(token, 'SECRET_KEY', (err, decoded) => {
    if (err) {
      console.log('Token no válido:', err); // Si hay un error con el token
      return res.status(401).send('Token no válido');
    }
    req.userId = decoded.id; // Guardamos el userId en el objeto req para usarlo en las rutas
    next();
  });
};


// Ruta para agregar un recordatorio
router.post('/', verificarToken, (req, res) => {
  const { nombre, descripcion } = req.body;
  const userId = req.userId; // Tomamos el user_id del token

  if (!nombre || !descripcion) {
    return res.status(400).send('Nombre y descripción son requeridos');
  }

  // Agregar el recordatorio a la base de datos usando pool.query()
  pool.query(
    'INSERT INTO recordatorios (user_id, nombre, descripcion, realizado) VALUES (?, ?, ?, ?)',
    [userId, nombre, descripcion, false],
    (err, results) => {
      if (err) {
        return res.status(500).send('Error al insertar el recordatorio');
      }
      res.status(201).send({ message: 'Recordatorio agregado', recordatorioId: results.insertId });
    }
  );
});

// Ruta para obtener los recordatorios de un usuario
router.get('/', verificarToken, (req, res) => {
  const userId = req.userId;

  // Obtener los recordatorios del usuario
  pool.query(
    'SELECT * FROM recordatorios WHERE user_id = ?',
    [userId],
    (err, results) => {
      if (err) {
        return res.status(500).send('Error al obtener los recordatorios');
      }
      res.status(200).send(results);
    }
  );
});

// Ruta para actualizar un recordatorio (marcarlo como completado)
router.put('/:id', verificarToken, (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  // Actualizar el estado del recordatorio
  pool.query(
    'UPDATE recordatorios SET realizado = TRUE WHERE id = ? AND user_id = ?',
    [id, userId],
    (err, results) => {
      if (err) {
        return res.status(500).send('Error al actualizar el recordatorio');
      }
      res.status(200).send({ message: 'Recordatorio actualizado' });
    }
  );
});

// Ruta para eliminar un recordatorio
router.delete('/:id', verificarToken, (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  // Eliminar el recordatorio
  pool.query(
    'DELETE FROM recordatorios WHERE id = ? AND user_id = ?',
    [id, userId],
    (err, results) => {
      if (err) {
        return res.status(500).send('Error al eliminar el recordatorio');
      }
      res.status(200).send({ message: 'Recordatorio eliminado' });
    }
  );
});

export default router;
