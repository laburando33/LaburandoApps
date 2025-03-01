"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/lib/database.types"
import { sendNotification, sendWhatsAppMessage } from "@/services/notificationService"
import { useToast } from "@/lib/useToast"

interface FormData {
  name: string
  email: string
  phone: string
  serviceType: string
  description: string
}

interface ServiceRequestFormProps {
  initialServiceType?: string
}

const ServiceRequestForm: React.FC<ServiceRequestFormProps> = ({ initialServiceType = "" }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: initialServiceType,
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const supabase = createClientComponentClient<Database>()
  const { showToast } = useToast()

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save the request to Supabase
      const { error } = await supabase.from("service_requests").insert([formData])

      if (error) throw error

      // Send notification to relevant professionals (simplified for demo)
      await sendNotification(
        "demo-professional-id",
        "Nueva solicitud de servicio",
        `Hay una nueva solicitud para ${formData.serviceType}`
      )

      // Send WhatsApp message to the client
      await sendWhatsAppMessage(
        formData.phone,
        `Gracias por tu solicitud de ${formData.serviceType}. Pronto te contactaremos con presupuestos.`
      )

      showToast({
        type: "success",
        title: "Solicitud enviada",
        description: "Tu solicitud ha sido enviada con éxito.",
      })

      // Clear the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: initialServiceType,
        description: "",
      })
    } catch (error) {
      console.error("Error al enviar la solicitud:", error)
      showToast({
        type: "error",
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Por favor, intenta de nuevo.",
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
