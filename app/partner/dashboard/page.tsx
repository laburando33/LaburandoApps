"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/lib/database.types"

interface ServiceRequest {
  id: string
  service_type: string
  description: string
  created_at: string
}

export default function PartnerDashboard() {
  const [requests, setRequests] = useState<ServiceRequest[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    const fetchRequests = async () => {
      const { data, error } = await supabase
        .from("service_requests")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching requests:", error)
      } else {
        setRequests(data || [])
      }
      setLoading(false)
    }

    fetchRequests()
  }, [supabase])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Panel de Profesional</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {requests.map((request) => (
          <Card key={request.id}>
            <CardHeader>
              <CardTitle>{request.service_type}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{request.description}</p>
              <p className="text-sm text-gray-500 mb-4">Fecha: {new Date(request.created_at).toLocaleDateString()}</p>
              <Button>Ver detalles</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

