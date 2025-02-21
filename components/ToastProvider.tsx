"use client"

import type React from "react"
import { useToast } from "@/lib/useToast"
import { ToastWrapper } from "@/components/ui/ToastWrapper"

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast()

  return (
    <>
      {children}
      <ToastWrapper toast={toast} />
    </>
  )
}

