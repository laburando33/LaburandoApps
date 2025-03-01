"use client"

import React, { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/lib/useToast"
import { Platform, View, Text } from "react-native"

export default function UpdatePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()
  const { showToast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.GestureResponderEvent) => {
    if (Platform.OS !== "web") {
      e.preventDefault()
    }
    setLoading(true)

    if (newPassword !== confirmPassword) {
      showToast({
        type: "error",
        title: "Error de actualización",
        description: "Las contraseñas nuevas no coinciden.",
      })
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword })

      if (error) throw error

      showToast({
        type: "success",
        title: "Contraseña actualizada",
        description: "Tu contraseña ha sido actualizada correctamente.",
      })
      router.push("/dashboard")
    } catch (error) {
      showToast({
        type: "error",
        title: "Error de actualización",
        description: error instanceof Error ? error.message : "Ha ocurrido un error al actualizar la contraseña.",
      })
    } finally {
      setLoading(false)
    }
  }

  const FormWrapper = Platform.OS === "web" ? "form" : View
  const LabelWrapper = Platform.OS === "web" ? Label : Text

  return (
    <FormWrapper onSubmit={handleSubmit} style={Platform.OS !== "web" ? { gap: 16 } : undefined}>
      <View>
        <LabelWrapper htmlFor="currentPassword">Contraseña actual</LabelWrapper>
        <Input
          id="currentPassword"
          type="password"
          value={currentPassword}
          onChangeText={setCurrentPassword}
          required
          style={Platform.OS !== "web" ? { marginTop: 8 } : undefined}
        />
      </View>
      <View style={Platform.OS !== "web" ? { marginTop: 16 } : undefined}>
        <LabelWrapper htmlFor="newPassword">Nueva contraseña</LabelWrapper>
        <Input
          id="newPassword"
          type="password"
          value={newPassword}
          onChangeText={setNewPassword}
          required
          style={Platform.OS !== "web" ? { marginTop: 8 } : undefined}
        />
      </View>
      <View style={Platform.OS !== "web" ? { marginTop: 16 } : undefined}>
        <LabelWrapper htmlFor="confirmPassword">Confirmar nueva contraseña</LabelWrapper>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          required
          style={Platform.OS !== "web" ? { marginTop: 8 } : undefined}
        />
      </View>
      <Button onPress={handleSubmit} disabled={loading} style={Platform.OS !== "web" ? { marginTop: 16 } : undefined}>
        {loading ? "Actualizando..." : "Actualizar contraseña"}
      </Button>
    </FormWrapper>
  )
}