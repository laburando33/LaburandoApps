import pool from "../lib/localDb"

async function migrate() {
  const client = await pool.connect()
  try {
    await client.query("BEGIN")

    // Crear tabla de perfiles
    await client.query(`
      CREATE TABLE IF NOT EXISTS profiles (
        id SERIAL PRIMARY KEY,
        user_id UUID UNIQUE NOT NULL,
        full_name VARCHAR(255),
        avatar_url TEXT,
        website TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Crear tabla de servicios
    await client.query(`
      CREATE TABLE IF NOT EXISTS services (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Crear tabla de solicitudes de servicio
    await client.query(`
      CREATE TABLE IF NOT EXISTS service_requests (
        id SERIAL PRIMARY KEY,
        user_id UUID NOT NULL,
        service_id INTEGER REFERENCES services(id),
        description TEXT,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await client.query("COMMIT")
    console.log("Migración completada con éxito")
  } catch (e) {
    await client.query("ROLLBACK")
    console.error("Error durante la migración:", e)
  } finally {
    client.release()
  }
}

migrate().catch(console.error)

