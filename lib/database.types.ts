export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          location: string | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id: string
          full_name?: string | null
          location?: string | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          full_name?: string | null
          location?: string | null
          created_at?: string
          updated_at?: string | null
        }
      }
      service_requests: {
        Row: {
          id: string
          user_id: string
          service_type: string
          description: string
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id: string
          user_id: string
          service_type: string
          description: string
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          service_type?: string
          description?: string
          created_at?: string
          updated_at?: string | null
        }
      }
      professional_profiles: {
        Row: {
          id: string
          user_id: string
          services: string[]
          verified: boolean
          rating: number
          total_reviews: number
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id: string
          user_id: string
          services: string[]
          verified?: boolean
          rating?: number
          total_reviews?: number
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          services?: string[]
          verified?: boolean
          rating?: number
          total_reviews?: number
          created_at?: string
          updated_at?: string | null
        }
      }
      reviews: {
        Row: {
          id: string
          user_id: string
          professional_id: string
          rating: number
          comment: string
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id: string
          user_id: string
          professional_id: string
          rating: number
          comment: string
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          professional_id?: string
          rating?: number
          comment?: string
          created_at?: string
          updated_at?: string | null
        }
      }
      partner_credits: {
        Row: {
          id: string
          partner_id: string
          credits: number
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id: string
          partner_id: string
          credits: number
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          partner_id?: string
          credits?: number
          created_at?: string
          updated_at?: string | null
        }
      }
      requests: {
        Row: {
          id: string
          partner_id: string
          request_details: string
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id: string
          partner_id: string
          request_details: string
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          partner_id?: string
          request_details?: string
          created_at?: string
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

