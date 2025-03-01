"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"
import { isSupabaseConfigured } from "@/lib/localDb"
import type React from "react"

export function ConfigCheck({ children }: { children: React.ReactNode }) {
  if (!isSupabaseConfigured()) {
    return (
      <>
        <Alert variant="default">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Advertencia de Configuración</AlertTitle>
          <AlertDescription>
            La configuración de Supabase no está completa. Algunas funcionalidades pueden no estar disponibles. Por
            favor, configure las siguientes variables de entorno:
            <ul className="list-disc list-inside mt-2">
              <li>NEXT_PUBLIC_SUPABASE_URL</li>
              <li>NEXT_PUBLIC_SUPABASE_ANON_KEY</li>
            </ul>
          </AlertDescription>
        </Alert>
        {children}
      </>
    )
  }

  return <>{children}</>
}

