"use client"

import type React from "react"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/lib/useToast"

export default function RegistrationForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()
  const { showToast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      console.log("Attempting to sign up with:", { email, password, fullName })
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (error) {
        console.error("Supabase sign up error:", error)
        showToast({
          type: "error",
          title: "Error en el registro",
          description: error.message,
        })
      } else {
        console.log("Sign up successful:", data)
        if (data.user) {
          const { error: profileError } = await supabase.from("profiles").upsert({
            id: data.user.id,
            full_name: fullName,
            created_at: new Date().toISOString(),
          })

          if (profileError) {
            console.error("Error creating profile:", profileError)
          }
        }
        showToast({
          type: "success",
          title: "Registro exitoso",
          description: "Se ha enviado un correo de confirmación a tu dirección de email.",
        })
        router.push("/login")
      }
    } catch (error) {
      console.error("Unexpected error during sign up:", error)
      showToast({
        type: "error",
        title: "Error en el registro",
        description:
          error instanceof Error
            ? error.message
            : "Hubo un problema al registrar tu cuenta. Por favor, intenta de nuevo.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="fullName">Nombre completo</Label>
        <Input id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="email">Correo electrónico</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="password">Contraseña</Label>
        <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Registrando..." : "Registrarse"}
      </Button>
    </form>
  )
}

