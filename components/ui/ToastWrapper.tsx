"use client"

import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast"
import type { ToastMessage } from "@/lib/useToast"

interface ToastWrapperProps {
  toast: ToastMessage | null
}

export function ToastWrapper({ toast }: ToastWrapperProps) {
  if (!toast) return null

  return (
    <ToastProvider>
      <Toast>
        <div className="grid gap-1">
          <ToastTitle>{toast.title}</ToastTitle>
          {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
        </div>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  )
}

