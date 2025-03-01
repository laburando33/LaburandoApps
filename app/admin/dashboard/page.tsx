"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/lib/database.types"

interface Partner {
  id: string
  full_name: string
  email: string
  verified: boolean
}

export default function AdminDashboard() {
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    const fetchPartners = async () => {
      const { data, error } = await supabase.from("profiles").select("*").eq("role", "partner")

      if (error) {
        console.error("Error fetching partners:", error)
      } else {
        setPartners(data || [])
      }
      setLoading(false)
    }

    fetchPartners()
  }, [supabase])

  const handleVerify = async (id: string) => {
    const { error } = await supabase.from("profiles").update({ verified: true }).eq("id", id)

    if (error) {
      console.error("Error verifying partner:", error)
    } else {
      setPartners(partners.map((p) => (p.id === id ? { ...p, verified: true } : p)))
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <Card key={partner.id}>
            <CardHeader>
              <CardTitle>{partner.full_name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{partner.email}</p>
              <p className="text-sm text-gray-500 mb-4">Estado: {partner.verified ? "Verificado" : "No verificado"}</p>
              {!partner.verified && <Button onClick={() => handleVerify(partner.id)}>Verificar</Button>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

