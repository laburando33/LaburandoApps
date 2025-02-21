"use client"

import { useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [user, setUser] = useState<any>(null)
  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
    }

    getUser()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <Link href="/" className="text-xl font-bold">
        LaburandoApp
      </Link>
      <div>
        {user ? (
          <>
            <Link href="/dashboard">
              <Button variant="link">Dashboard</Button>
            </Link>
            <Button onClick={handleSignOut}>Cerrar sesión</Button>
          </>
        ) : (
          <>
            <Link href="/login">
              <Button variant="link">Iniciar sesión</Button>
            </Link>
            <Link href="/register">
              <Button>Registrarse</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

