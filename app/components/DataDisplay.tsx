// filepath: /C:/Users/PC/Desktop/LaburandoApps/app/components/DataDisplay.tsx

'use client'

import { useData } from '../../hooks/useData'
import { DataItem } from '@/app/types'

interface DataDisplayProps {
  table: 'profiles' | 'service_requests' | 'professional_profiles' | 'reviews'
}

export default function DataDisplay({ table }: DataDisplayProps) {
  const { data, error, loading } = useData(table)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data || data.length === 0) return <div>No data available</div>

  return (
    <div>
      {data.map((item: DataItem) => (
        <div key={item.id}>
          {table === 'profiles' && 'full_name' in item && (
            <p>{item.full_name}</p>
          )}
          {table === 'service_requests' && 'service_type' in item && (
            <p>{item.service_type}</p>
          )}
          {table === 'professional_profiles' && 'services' in item && (
            <p>{item.services.join(', ')}</p>
          )}
          {table === 'reviews' && 'rating' in item && (
            <p>Rating: {item.rating}</p>
          )}
        </div>
      ))}
    </div>
  )
}