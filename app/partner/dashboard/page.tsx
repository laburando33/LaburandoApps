// app/partner/dashboard/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib/database.types'

export default function PartnerDashboard() {
  interface Profile {
    name: string;
    email: string;
    phone: string;
    category: string;
    location: string;
  }

  const [profile, setProfile] = useState<Profile | null>(null)
  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()

        if (error) {
          console.error('Error fetching profile:', error)
        } else {
          setProfile(data)
        }
      }
    }

    fetchProfile()
  }, [supabase])

  if (!profile) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Panel de Usuario (Partner)</h1>
      <div>
        <h2 className="text-2xl font-bold mb-2">Perfil</h2>
        <p>Nombre: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Teléfono: {profile.phone}</p>
        <p>Categoría: {profile.category}</p>
        <p>Ubicación: {profile.location}</p>
      </div>
      {/* Add more sections for portfolio, reviews, etc. */}
    </div>
  )
}