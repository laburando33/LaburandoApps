import type { Database } from "@/lib/database.types"

export type Profile = Database["public"]["Tables"]["profiles"]["Row"]
export type ServiceRequest = Database["public"]["Tables"]["service_requests"]["Row"]
export type ProfessionalProfile = Database["public"]["Tables"]["professional_profiles"]["Row"]
export type Review = Database["public"]["Tables"]["reviews"]["Row"]
export type PartnerCredit = Database["public"]["Tables"]["partner_credits"]["Row"]
export type Request = Database["public"]["Tables"]["requests"]["Row"]

export type DataItem = Profile | ServiceRequest | ProfessionalProfile | Review | PartnerCredit | Request

// Tipos para inserciones
export type ProfileInsert = Database["public"]["Tables"]["profiles"]["Insert"]
export type ServiceRequestInsert = Database["public"]["Tables"]["service_requests"]["Insert"]
export type ProfessionalProfileInsert = Database["public"]["Tables"]["professional_profiles"]["Insert"]
export type ReviewInsert = Database["public"]["Tables"]["reviews"]["Insert"]
export type PartnerCreditInsert = Database["public"]["Tables"]["partner_credits"]["Insert"]
export type RequestInsert = Database["public"]["Tables"]["requests"]["Insert"]

// Tipos para actualizaciones
export type ProfileUpdate = Database["public"]["Tables"]["profiles"]["Update"]
export type ServiceRequestUpdate = Database["public"]["Tables"]["service_requests"]["Update"]
export type ProfessionalProfileUpdate = Database["public"]["Tables"]["professional_profiles"]["Update"]
export type ReviewUpdate = Database["public"]["Tables"]["reviews"]["Update"]
export type PartnerCreditUpdate = Database["public"]["Tables"]["partner_credits"]["Update"]
export type RequestUpdate = Database["public"]["Tables"]["requests"]["Update"]

// Enumeraciones útiles
export type UserRole = "client" | "professional" | "admin"
export type ServiceRequestStatus = "pending" | "assigned" | "in_progress" | "completed" | "cancelled"

// Tipo para un profesional con su perfil completo
export type ProfessionalWithProfile = ProfessionalProfile & { profile: Profile }

// Tipo para una reseña con información del cliente y del profesional
export type ReviewWithDetails = Review & {
  client: Profile
  professional: ProfessionalWithProfile
  service_request: ServiceRequest
}

// Funciones de ayuda para verificar el tipo de un DataItem
export function isProfile(item: DataItem): item is Profile {
  return "full_name" in item
}

export function isServiceRequest(item: DataItem): item is ServiceRequest {
  return "service_type" in item
}

export function isProfessionalProfile(item: DataItem): item is ProfessionalProfile {
  return "profession" in item
}

export function isReview(item: DataItem): item is Review {
  return "rating" in item
}

export function isPartnerCredit(item: DataItem): item is PartnerCredit {
  return "credits" in item
}

export function isRequest(item: DataItem): item is Request {
  return "request_details" in item
}

