"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function SupabaseTest() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    async function testConnection() {
      try {
        console.log("Testing Supabase connection...")
        const { data, error } = await supabase.from("profiles").select("count").single()
        if (error) throw error
        console.log("Supabase connection test result:", data)
        setStatus("success")
      } catch (error) {
        console.error("Supabase connection test error:", error)
        setStatus("error")
        setErrorMessage(error instanceof Error ? error.message : "Unknown error")
      }
    }

    testConnection()
  }, [])

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Supabase Connection Test</h2>
      {status === "loading" && <p>Testing connection...</p>}
      {status === "success" && <p className="text-green-600">Successfully connected to Supabase!</p>}
      {status === "error" && (
        <div>
          <p className="text-red-600">Failed to connect to Supabase</p>
          <p className="text-sm text-gray-600">{errorMessage}</p>
        </div>
      )}
    </div>
  )
}

