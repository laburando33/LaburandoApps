// filepath: /C:/Users/PC/Desktop/LaburandoApps/app/admin/dashboard/ApprovePartnerButton.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ApprovePartnerButton({ partnerId }: { partnerId: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleApprove = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/approve-partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ partnerId }),
      })

      if (!response.ok) {
        throw new Error('Failed to approve partner')
      }

      router.refresh()
    } catch (error) {
      console.error('Error approving partner:', error)
      alert('Error al aprobar el partner')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button 
      onClick={handleApprove}
      disabled={isLoading}
      className={`ml-2 ${
        isLoading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-700'
      } text-white font-bold py-2 px-4 rounded`}
    >
      {isLoading ? 'Aprobando...' : 'Aprobar'}
    </button>
  )
}