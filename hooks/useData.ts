"use client"

import { useState, useEffect } from "react"
import { getSupabase } from "@/lib/supabase"
import type { TableName, DataItem } from "@/types"

export function useData(table: TableName) {
  const [data, setData] = useState<DataItem[] | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function fetchData() {
      try {
        const supabase = getSupabase()
        const { data, error } = await supabase.from(table).select("*")
        if (error) throw error
        if (isMounted) setData(data)
      } catch (e) {
        if (isMounted) setError(e instanceof Error ? e : new Error("An unknown error occurred"))
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [table])

  return { data, error, loading }
}

