"use client"

import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/lib/database.types"
import { useToast } from "@/components/ui/use-toast"

type Request = Database["public"]["Tables"]["requests"]["Row"]
// Remove this line
//type PartnerCredit = Database["public"]["Tables"]["partner_credits"]["Row"]

const PartnerDashboard = () => {
  const [requests, setRequests] = useState<Request[]>([])
  const [credits, setCredits] = useState(0)
  const supabase = createClientComponentClient<Database>()
  const { toast } = useToast()

  useEffect(() => {
    fetchRequestsMemoized()
    fetchCreditsMemoized()
  }, []) // Updated useEffect dependency array

  const fetchRequestsMemoized = useCallback(async () => {
    const { data, error } = await supabase.from("requests").select("*").eq("status", "pending")
    if (data) setRequests(data)
    if (error) {
      console.error("Error fetching requests:", error)
      toast({
        title: "Error",
        description: "No se pudieron cargar las solicitudes",
        variant: "destructive",
      })
    }
  }, [supabase, toast])

  const fetchCreditsMemoized = useCallback(async () => {
    const { data, error } = await supabase.from("partner_credits").select("credits").single()
    if (data) setCredits(data.credits)
    if (error) {
      console.error("Error fetching credits:", error)
      toast({
        title: "Error",
        description: "No se pudieron cargar los créditos",
        variant: "destructive",
      })
    }
  }, [supabase, toast])

  const handleBuyCredits = async () => {
    // Implementar lógica para comprar créditos
    toast({
      title: "Compra de créditos",
      description: "Funcionalidad en desarrollo",
    })
  }

  const handleViewRequest = async (requestId: string) => {
    // Implementar lógica para ver detalles de la solicitud
    toast({
      title: "Ver detalles",
      description: `Viendo detalles de la solicitud ${requestId}`,
    })
  }

  const handleEditProfile = () => {
    // Implementar lógica para editar perfil
    toast({
      title: "Editar perfil",
      description: "Funcionalidad en desarrollo",
    })
  }

  const handleViewHistory = () => {
    // Implementar lógica para ver historial
    toast({
      title: "Ver historial",
      description: "Funcionalidad en desarrollo",
    })
  }

  const handleViewReviews = () => {
    // Implementar lógica para ver reseñas
    toast({
      title: "Ver reseñas",
      description: "Funcionalidad en desarrollo",
    })
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Perfil Profesional</CardTitle>
          <CardDescription>Gestiona tu información y servicios</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleEditProfile}>Editar Perfil</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Solicitudes Disponibles</CardTitle>
          <CardDescription>Nuevas oportunidades de trabajo</CardDescription>
        </CardHeader>
        <CardContent>
          {requests.length > 0 ? (
            requests.map((request) => (
              <div key={request.id} className="mb-2">
                <p>{request.request_details}</p>
                <Button onClick={() => handleViewRequest(request.id)}>Ver Detalles</Button>
              </div>
            ))
          ) : (
            <p>No hay solicitudes disponibles en este momento.</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mis Créditos</CardTitle>
          <CardDescription>Créditos disponibles: {credits}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleBuyCredits}>Comprar Créditos</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mis Trabajos</CardTitle>
          <CardDescription>Historial de servicios realizados</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleViewHistory}>Ver Historial</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reseñas y Calificaciones</CardTitle>
          <CardDescription>Lo que dicen tus clientes</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleViewReviews}>Ver Reseñas</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default PartnerDashboard

