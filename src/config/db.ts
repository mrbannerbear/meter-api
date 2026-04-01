/**
 * Database Configuration Module
 * 
 * This module sets up and manages a PostgreSQL connection pool using the `pg` library.
 * It leverages environment variables for secure configuration and includes an asynchronous
 * verification function to confirm connectivity at startup.
 */

import { Pool } from 'pg';
import env from './env.js'

// PostgreSQL connection pool configuration using environment variables
const pool = new Pool({
  user: env.DB_USER,
  host: env.DB_HOST,
  database: env.DB_NAME,
  password: env.DB_PASSWORD,
  port: env.DB_PORT,
});

/**
 * Asynchronously verifies the PostgreSQL connection.
 * Ensures that any issues are logged immediately at application startup.
 */
async function verifyConnection(): Promise<void> {
  try {
    // Attempt to acquire a client from the pool
    const client = await pool.connect();
    console.log('✅ Connected to PostgreSQL database');
    client.release(); // Release the client back to the pool
  } catch (error) {
    console.error('❌ Error connecting to the database:', error);
  }
}

// Immediately verify connection upon module load.
verifyConnection();

// Export the pool to be used across the application.
export default pool;