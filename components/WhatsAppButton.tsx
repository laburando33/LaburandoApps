import type React from "react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber: string
  message: string
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const handleClick = async () => {
    try {
      const response = await fetch("/api/sendWhatsApp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: phoneNumber,
          body: message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        alert("Mensaje enviado con éxito")
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al enviar el mensaje")
    }
  }

  return <Button onClick={handleClick}>Contactar por WhatsApp</Button>
}

export default WhatsAppButton

