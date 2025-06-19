import db from '../config/db.js';

export const addContact = (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  // Validación de los datos
  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  // Insertar en la base de datos
  const query = 'INSERT INTO contacto (nombre, correo, mensaje) VALUES (?, ?, ?)';
  db.query(query, [nombre, correo, mensaje], (err, result) => {
    if (err) {
      console.error('Error al guardar el contacto: ', err);  // Log de error para depuración
      return res.status(500).json({ error: 'Hubo un error al guardar el contacto' });
    }
    console.log('Contacto guardado con éxito: ', result);  // Log para verificar la respuesta
    res.status(200).json({ message: 'Contacto guardado con éxito' });
  });
};
