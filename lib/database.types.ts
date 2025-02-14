// filepath: /C:/Users/PC/Desktop/LaburandoApps/lib/database.types.ts

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
          phone: string | null
          location: string | null
        }
        Insert: {
          id: string
          created_at?: string
          email: string
          full_name: string
          avatar_url?: string
          role?: "client" | "professional" | "admin"
          verified?: boolean
          phone?: string | null
          location?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string
          avatar_url?: string
          role?: "client" | "professional" | "admin"
          verified?: boolean
          phone?: string | null
          location?: string | null
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
          professional_id: string | null
          price: number | null
          completed_at: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          client_id: string
          service_type: string
          description: string
          location: string
          status?: "pending" | "assigned" | "completed"
          professional_id?: string | null
          price?: number | null
          completed_at?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          client_id?: string
          service_type?: string
          description?: string
          location?: string
          status?: "pending" | "assigned" | "completed"
          professional_id?: string | null
          price?: number | null
          completed_at?: string | null
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
          bio: string | null
          years_of_experience: number | null
          availability: string[] | null
        }
        Insert: {
          id?: string
          user_id: string
          services: string[]
          certifications?: string[]
          rating?: number
          total_reviews?: number
          verified?: boolean
          bio?: string | null
          years_of_experience?: number | null
          availability?: string[] | null
        }
        Update: {
          id?: string
          user_id?: string
          services?: string[]
          certifications?: string[]
          rating?: number
          total_reviews?: number
          verified?: boolean
          bio?: string | null
          years_of_experience?: number | null
          availability?: string[] | null
        }
      }
      reviews: {
        Row: {
          id: string
          created_at: string
          service_request_id: string
          client_id: string
          professional_id: string
          rating: number
          comment: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          service_request_id: string
          client_id: string
          professional_id: string
          rating: number
          comment?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          service_request_id?: string
          client_id?: string
          professional_id?: string
          rating?: number
          comment?: string | null
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