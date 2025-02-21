"use client"

import { useState, useCallback } from "react"

export type ToastType = "success" | "error" | "info"

export interface ToastMessage {
  type: ToastType
  title: string
  description?: string
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toast, setToast] = useState<ToastMessage | null>(null)

  const showToast = useCallback((message: ToastMessage) => {
    setToast(message)
    setTimeout(() => {
      setToast(null)
    }, 3000) // Hide toast after 3 seconds
  }, [])

  return { toast, showToast }
}

