import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast"
import type { ToastMessage } from "@/lib/useToast"

interface WebToastProps {
  toast: ToastMessage | null
}

export function WebToast({ toast }: WebToastProps) {
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

