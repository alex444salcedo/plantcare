import mysql from 'mysql2/promise';
import pool from './src/config/db.js';

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    console.log('Conexión exitosa:', rows[0].result);
  } catch (error) {
    console.error('Error de conexión:', error);
  } finally {
    await pool.end();
  }
}

testConnection();
