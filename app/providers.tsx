"use client"

import type React from "react"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import type { Database } from "@/lib/database.types"

export function Providers({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createClientComponentClient<Database>())

  return <SessionContextProvider supabaseClient={supabase}>{children}</SessionContextProvider>
}

