import pool from '../config/db.js';

export const createPlant = async (req, res) => {
  const { name, species, description, careInstructions } = req.body;

  if (!name || !species || !description || !careInstructions) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    const sql = `INSERT INTO plants (name, species, description, care_instructions) VALUES (?, ?, ?, ?)`;
    const [result] = await pool.execute(sql, [name, species, description, careInstructions]);

    res.status(201).json({ message: 'Planta agregada con éxito', plantId: result.insertId });
  } catch (error) {
    console.error('Error al agregar planta:', error);
    res.status(500).json({ message: 'Error al agregar planta' });
  }
};
