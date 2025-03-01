"use client"

import { useEffect, useState } from "react"
import  supabase from "@/lib/localDb"

export default function SupabaseConnectionTest() {
  const [status, setStatus] = useState<"loading" | "connected" | "error">("loading")

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase.from("profiles").select("count").single()
        if (error) throw error
        console.log("Supabase connection test data:", data)
        setStatus("connected")
      } catch (error) {
        console.error("Error connecting to Supabase:", error)
        setStatus("error")
      }
    }

    testConnection()
  }, [])

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Supabase Connection Status:</h2>
      {status === "loading" && <p>Testing connection...</p>}
      {status === "connected" && <p className="text-green-600">Connected to Supabase successfully!</p>}
      {status === "error" && <p className="text-red-600">Error connecting to Supabase. Check console for details.</p>}
    </div>
  )
}

