"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/lib/database.types"
import { sendNotification, sendWhatsAppMessage } from "@/services/notificationService"
import { useToast } from "@/components/ui/use-toast"

interface FormData {
  name: string
  email: string
  phone: string
  serviceType: string
  description: string
}

const ServiceRequestForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const supabase = createClientComponentClient<Database>()
  const { toast } = useToast()

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Guardar la solicitud en Supabase
      const { error } = await supabase.from("service_requests").insert([formData])

      if (error) throw error

      // Enviar notificación a profesionales relevantes
      const { data: professionals, error: profError } = await supabase
        .from("professional_profiles")
        .select("user_id")
        .contains("services", [formData.serviceType])

      if (profError) throw profError

      if (professionals) {
        for (const prof of professionals) {
          await sendNotification(
            prof.user_id,
            "Nueva solicitud de servicio",
            `Hay una nueva solicitud para ${formData.serviceType}`,
          )
        }
      }

      // Enviar mensaje de WhatsApp al cliente
      await sendWhatsAppMessage(
        formData.phone,
        `Gracias por tu solicitud de ${formData.serviceType}. Pronto te contactaremos con presupuestos.`,
      )

      toast({
        title: "Solicitud enviada",
        description: "Tu solicitud ha sido enviada con éxito.",
      })

      // Limpiar el formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        description: "",
      })
    } catch (error) {
      console.error("Error al enviar la solicitud:", error)
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Por favor, intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="name" placeholder="Nombre completo" value={formData.name} onChange={handleChange} required />
      <Input
        name="email"
        type="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input name="phone" type="tel" placeholder="Teléfono" value={formData.phone} onChange={handleChange} required />
      <Input
        name="serviceType"
        placeholder="Tipo de servicio"
        value={formData.serviceType}
        onChange={handleChange}
        required
      />
      <Textarea
        name="description"
        placeholder="Describe el servicio que necesitas"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar solicitud"}
      </Button>
    </form>
  )
}

export default ServiceRequestForm

