"use client"

import React, { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/lib/useToast"
import { Platform, View, Text } from "react-native"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()
  const { showToast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.GestureResponderEvent) => {
    if (Platform.OS !== "web") {
      e.preventDefault()
    }
    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      showToast({
        type: "success",
        title: "Inicio de sesión exitoso",
        description: "Has iniciado sesión correctamente.",
      })
      router.push("/dashboard")
    } catch (error) {
      showToast({
        type: "error",
        title: "Error de inicio de sesión",
        description: error instanceof Error ? error.message : "Ha ocurrido un error al iniciar sesión.",
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
        <LabelWrapper htmlFor="email">Correo electrónico</LabelWrapper>
        <Input
          id="email"
          type="email"
          value={email}
          onChangeText={setEmail}
          required
          style={Platform.OS !== "web" ? { marginTop: 8 } : undefined}
        />
      </View>
      <View style={Platform.OS !== "web" ? { marginTop: 16 } : undefined}>
        <LabelWrapper htmlFor="password">Contraseña</LabelWrapper>
        <Input
          id="password"
          type="password"
          value={password}
          onChangeText={setPassword}
          required
          style={Platform.OS !== "web" ? { marginTop: 8 } : undefined}
        />
      </View>
      <Button onPress={handleSubmit} disabled={loading} style={Platform.OS !== "web" ? { marginTop: 16 } : undefined}>
        {loading ? "Iniciando sesión..." : "Iniciar sesión"}
      </Button>
    </FormWrapper>
  )
}