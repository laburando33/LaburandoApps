"use client"

import { useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import type { Database } from "@/lib/database.types"
import type { User } from "@supabase/auth-helpers-nextjs"

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
      } else {
        router.push("/login")
      }
    }

    getUser()
  }, [supabase.auth, router])

  if (!user) {
    return <div>Cargando...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p>Bienvenido, {user.email}!</p>
      {/* Aquí puedes agregar más contenido del dashboard */}
    </div>
  )
}

