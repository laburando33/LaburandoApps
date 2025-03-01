import type { Database } from "./lib/database.types"

export type TableName = keyof Database["public"]["Tables"]

export interface DataItem {
  id: string
  // Add other common properties here
}

export interface Profile extends DataItem {
  full_name: string
  // Add other profile-specific properties
}

export interface ServiceRequest extends DataItem {
  service_type: string
  // Add other service request-specific properties
}

export interface ProfessionalProfile extends DataItem {
  services: string[]
  // Add other professional profile-specific properties
}

export interface Review extends DataItem {
  rating: number
  // Add other review-specific properties
}

export interface PartnerCredit extends DataItem {
  credits: number
  // Add other partner credit-specific properties
}

export interface Request extends DataItem {
  request_details: string
  // Add other request-specific properties
}

export function isProfile(item: DataItem): item is Profile {
  return "full_name" in item
}

export function isServiceRequest(item: DataItem): item is ServiceRequest {
  return "service_type" in item
}

export function isProfessionalProfile(item: DataItem): item is ProfessionalProfile {
  return "services" in item && Array.isArray((item as ProfessionalProfile).services)
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

