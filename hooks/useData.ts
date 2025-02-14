// filepath: /C:/Users/PC/Desktop/LaburandoApps/app/hooks/useData.ts

import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib/database.types'
import { DataItem } from '@/app/types'

export function useData(table: keyof Database['public']['Tables']) {
  const [data, setData] = useState<DataItem[] | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from(table)
          .select('*')

        if (error) throw error

        setData(data)
      } catch (e) {
        setError(e instanceof Error ? e : new Error('An unknown error occurred'))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [table, supabase])

  return { data, error, loading }
}