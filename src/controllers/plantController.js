import db from '../config/db.js';  // Importar la conexión desde db.js

// Guardar contacto
export const saveContacto = (req, res) => {
    const { asunto, email_contacto, tipo_consulta, descripcion, adjunto, nivel_urgencia } = req.body;

    const query = 'INSERT INTO contactos (asunto, email_contacto, tipo_consulta, descripcion, adjunto, nivel_urgencia) VALUES (?, ?, ?, ?, ?, ?)';
    
    db.query(query, [asunto, email_contacto, tipo_consulta, descripcion, adjunto, nivel_urgencia], (err, results) => {
        if (err) {
            console.error('Error al guardar los datos de contacto:', err);
            return res.status(500).json({ error: 'Hubo un error al guardar los datos de contacto' });
        }
        res.status(200).json({ message: 'Formulario de contacto guardado con éxito', id: results.insertId });
    });
};

// Guardar feedback
export const saveFeedback = (req, res) => {
    const { descripcion, tipo_feedback } = req.body;

    const query = 'INSERT INTO feedback (descripcion, tipo_feedback) VALUES (?, ?)';
    
    db.query(query, [descripcion, tipo_feedback], (err, results) => {
        if (err) {
            console.error('Error al guardar el feedback:', err);
            return res.status(500).json({ error: 'Hubo un error al guardar el feedback' });
        }
        res.status(200).json({ message: 'Feedback guardado con éxito', id: results.insertId });
    });
};
