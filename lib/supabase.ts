import { createClient } from "@supabase/supabase-js"
import type { Database } from "./database.types"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase environment variables are not set. Using fallback values.")
}

// Create the Supabase client
export const supabase = createClient<Database>(
  supabaseUrl || "https://example.supabase.co",
  supabaseAnonKey || "your-anon-key",
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
)

// Helper function to check if Supabase is configured
export function isSupabaseConfigured(): boolean {
  const isConfigured = Boolean(supabaseUrl && supabaseAnonKey)
  if (!isConfigured) {
    console.warn("Supabase is not properly configured. Check your environment variables.")
  }
  return isConfigured
}

// Helper function to get a type-safe Supabase client
export function getSupabase() {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase is not configured. Cannot proceed with database operations.")
  }
  return supabase
}