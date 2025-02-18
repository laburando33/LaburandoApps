"use client"

import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/lib/database.types"
import type { DataItem } from "@/app/types"

type TableName = keyof Database["public"]["Tables"]

export function useData(table: TableName) {
  const [data, setData] = useState<DataItem[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from(table).select("*")

        if (error) throw error

        setData(data)
      } catch (e) {
        setError(e instanceof Error ? e : new Error("An unknown error occurred"))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [table, supabase])

  return { data, error, loading }
}

