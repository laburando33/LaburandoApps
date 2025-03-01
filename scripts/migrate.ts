import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Anon Key:', supabaseAnonKey?.substring(0, 10) + '...')

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function verifyTables() {
  const tables = [
    'profiles',
    'service_requests',
    'professional_profiles',
    'reviews',
    'service_categories',
    'professional_skills'
  ];

  for (const table of tables) {
    try {
      console.log(`Verificando tabla: ${table}`);
      const { data, error } = await supabase
        .from(table)
        .select('count')
        .limit(1);

      if (error) {
        console.error(`Error completo:`, error);
        throw error;
      }

      console.log(`Tabla ${table} verificada correctamente.`);
      console.log(`Datos:`, data);
    } catch (e) {
      console.error(`Error al verificar la tabla ${table}:`, e);
      throw e;
    }
  }

  console.log("Todas las tablas han sido verificadas correctamente.");
}

verifyTables().then(() => {
  console.log("Verificación completada con éxito.");
  process.exit(0);
}).catch((error) => {
  console.error("Verificación fallida:", error);
  process.exit(1);
});