// filepath: /C:/Users/PC/Desktop/LaburandoApps/app/types.ts

import { Database } from '@/lib/database.types'

export type Profile = Database['public']['Tables']['profiles']['Row']
export type ServiceRequest = Database['public']['Tables']['service_requests']['Row']
export type ProfessionalProfile = Database['public']['Tables']['professional_profiles']['Row']
export type Review = Database['public']['Tables']['reviews']['Row']

export type DataItem = Profile | ServiceRequest | ProfessionalProfile | Review

// Tipos para inserciones
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert']
export type ServiceRequestInsert = Database['public']['Tables']['service_requests']['Insert']
export type ProfessionalProfileInsert = Database['public']['Tables']['professional_profiles']['Insert']
export type ReviewInsert = Database['public']['Tables']['reviews']['Insert']

// Tipos para actualizaciones
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update']
export type ServiceRequestUpdate = Database['public']['Tables']['service_requests']['Update']
export type ProfessionalProfileUpdate = Database['public']['Tables']['professional_profiles']['Update']
export type ReviewUpdate = Database['public']['Tables']['reviews']['Update']

// Enumeraciones útiles
export type UserRole = 'client' | 'professional' | 'admin'
export type ServiceRequestStatus = 'pending' | 'assigned' | 'in_progress' | 'completed' | 'cancelled'

// Tipo para un profesional con su perfil completo
export type ProfessionalWithProfile = ProfessionalProfile & { profile: Profile }

// Tipo para una reseña con información del cliente y del profesional
export type ReviewWithDetails = Review & { 
  client: Profile, 
  professional: ProfessionalWithProfile,
  service_request: ServiceRequest 
}

// Función de ayuda para verificar el tipo de un DataItem
export function isProfile(item: DataItem): item is Profile {
  return (item as Profile).role !== undefined;
}

export function isServiceRequest(item: DataItem): item is ServiceRequest {
  return (item as ServiceRequest).service_type !== undefined;
}

export function isProfessionalProfile(item: DataItem): item is ProfessionalProfile {
  return (item as ProfessionalProfile).services !== undefined;
}

export function isReview(item: DataItem): item is Review {
  return (item as Review).rating !== undefined;
}