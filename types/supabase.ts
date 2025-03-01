import type { User as SupabaseUser } from "@supabase/auth-helpers-nextjs"

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          location: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          full_name?: string | null
          location?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          full_name?: string | null
          location?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      professional_profiles: {
        Row: {
          id: string
          user_id: string
          services: string[]
          rating: number
          total_reviews: number
          verified: boolean
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          user_id: string
          services: string[]
          rating?: number
          total_reviews?: number
          verified?: boolean
          created_at?: string | null
          updated_at: string | null
        }
        Update: {
          id?: string
          user_id?: string
          services?: string[]
          rating?: number
          total_reviews?: number
          verified?: boolean
          created_at?: string | null
          updated_at: string | null
        }
      }
      service_requests: {
        Row: {
          id: string
          user_id: string
          service_type: string
          description: string
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          user_id: string
          service_type: string
          description: string
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          service_type?: string
          description?: string
          created_at?: string | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Row"]
export type Enums<T extends keyof Database["public"]["Enums"]> = Database["public"]["Enums"][T]

// Add this type definition
export type User = SupabaseUser

