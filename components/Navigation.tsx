"use client"

import { useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"
import { useRouter } from "next/navigation"

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
            <Link href="/dashboard" className="mr-4">
              Dashboard
            </Link>
            <button onClick={handleSignOut} className="bg-blue-500 text-white px-4 py-2 rounded">
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="mr-4">
              Iniciar sesión
            </Link>
            <Link href="/register" className="bg-blue-500 text-white px-4 py-2 rounded">
              Registrarse
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

