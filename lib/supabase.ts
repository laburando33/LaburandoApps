import { createClient } from "@supabase/supabase-js"
import type { Database } from "./database.types"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const isSupabaseConfigured = () => {
  return !!supabaseUrl && !!supabaseAnonKey
}

if (!isSupabaseConfigured()) {
  console.error("Missing Supabase environment variables")
  console.log("NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl)
  console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY:", supabaseAnonKey ? "Set" : "Not set")
  throw new Error("Missing Supabase environment variables")
}

console.log("Initializing Supabase client with URL:", supabaseUrl)

export const supabase = createClient<Database>(supabaseUrl!, supabaseAnonKey!, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
})

console.log("Supabase client initialized")

export const getSupabase = () => supabase

