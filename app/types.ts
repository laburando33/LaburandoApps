// filepath: /C:/Users/PC/Desktop/LaburandoApps/app/types.ts

import { Database } from '@/lib/database.types'

export type Profile = Database['public']['Tables']['profiles']['Row']
export type ServiceRequest = Database['public']['Tables']['service_requests']['Row']
export type ProfessionalProfile = Database['public']['Tables']['professional_profiles']['Row']
export type Review = Database['public']['Tables']['reviews']['Row']

export type DataItem = Profile | ServiceRequest | ProfessionalProfile | Review