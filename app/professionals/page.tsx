// app/professionals/page.tsx
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/lib/database.types'

export default async function ProfessionalListings() {
  const supabase = createServerComponentClient<Database>({ cookies })
  
  const { data: professionals, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('role', 'partner')

  if (error) {
    console.error('Error fetching professionals:', error)
    return <div>Error loading professionals</div>
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Profesionales</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {professionals.map((professional) => (
          <div key={professional.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{professional.name}</h2>
            <p>{professional.category}</p>
            <p>{professional.location}</p>
            <p>Rating: {professional.rating}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
              Contactar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}