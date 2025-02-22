"use client"

import type React from "react"
import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useToast } from "@/lib/useToast"
import { AdaptiveButton } from "@/components/ui/adaptive-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { View, Platform } from "react-native"

export default function PasswordResetForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const supabase = createClientComponentClient()
  const { showToast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo:
          Platform.OS === "web" ? `${window.location.origin}/update-password` : "laburandoapp://update-password",
      })

      if (error) throw error

      showToast({
        type: "success",
        title: "Correo enviado",
        description: "Se ha enviado un correo con instrucciones para restablecer tu contraseña.",
      })
    } catch (error) {
      showToast({
        type: "error",
        title: "Error",
        description: error instanceof Error ? error.message : "Ha ocurrido un error al enviar el correo.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={{ width: "100%" }}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <View>
          <Label htmlFor="email">Correo electrónico</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </View>
        <AdaptiveButton onPress={() => handleSubmit} disabled={loading}>
          {loading ? "Enviando..." : "Enviar correo de recuperación"}
        </AdaptiveButton>
      </form>
    </View>
  )
}

