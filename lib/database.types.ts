export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string
          avatar_url: string
          role: "client" | "professional" | "admin"
          verified: boolean
        }
        Insert: {
          id: string
          created_at?: string
          email: string
          full_name: string
          avatar_url?: string
          role?: "client" | "professional" | "admin"
          verified?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string
          avatar_url?: string
          role?: "client" | "professional" | "admin"
          verified?: boolean
        }
      }
      service_requests: {
        Row: {
          id: string
          created_at: string
          client_id: string
          service_type: string
          description: string
          location: string
          status: "pending" | "assigned" | "completed"
        }
        Insert: {
          id?: string
          created_at?: string
          client_id: string
          service_type: string
          description: string
          location: string
          status?: "pending" | "assigned" | "completed"
        }
        Update: {
          id?: string
          created_at?: string
          client_id?: string
          service_type?: string
          description?: string
          location?: string
          status?: "pending" | "assigned" | "completed"
        }
      }
      professional_profiles: {
        Row: {
          id: string
          user_id: string
          services: string[]
          certifications: string[]
          rating: number
          total_reviews: number
          verified: boolean
        }
        Insert: {
          id?: string
          user_id: string
          services: string[]
          certifications?: string[]
          rating?: number
          total_reviews?: number
          verified?: boolean
        }
        Update: {
          id?: string
          user_id?: string
          services?: string[]
          certifications?: string[]
          rating?: number
          total_reviews?: number
          verified?: boolean
        }
      }
    }
  }
}

