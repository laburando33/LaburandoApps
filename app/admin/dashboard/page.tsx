// filepath: /C:/Users/PC/Desktop/LaburandoApps/app/admin/dashboard/page.tsx
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/lib/database.types'
import { Profile } from '@/app/types'
import ApprovePartnerButton from './ApprovePartnerButton'

export default async function AdminDashboard() {
  const supabase = createServerComponentClient<Database>({ cookies })
  
  const { data: partners, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('role', 'partner')
    .eq('status', 'pending')

  if (error) {
    console.error('Error fetching partners:', error)
    return <div className="text-red-500 p-4">Error: Unable to load partners</div>
  }

  if (!partners || partners.length === 0) {
    return <div className="text-gray-500 p-4">No hay partners pendientes de aprobación</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Panel de Administración</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Partners Pendientes de Aprobación</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {partners.map((partner: Profile) => (
              <li key={partner.id} className="px-6 py-4 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{partner.name}</h3>
                  <p className="text-sm text-gray-500">Email: {partner.email}</p>
                  <p className="text-sm text-gray-500">Teléfono: {partner.phone || 'No especificado'}</p>
                  <p className="text-sm text-gray-500">Categoría: {partner.category || 'No especificada'}</p>
                  <p className="text-sm text-gray-500">Ubicación: {partner.location || 'No especificada'}</p>
                </div>
                <ApprovePartnerButton partnerId={partner.id} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Estadísticas</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900">Total de Partners Pendientes</h3>
          <p className="text-3xl font-bold">{partners.length}</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Acciones Rápidas</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Generar Reporte
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Enviar Notificación
          </button>
        </div>
      </section>
    </div>
  )
}