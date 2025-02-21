import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import { ToastProvider } from "@/components/ToastProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LaburandoApp",
  description: "Conectando profesionales con clientes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <ToastProvider>{children}</ToastProvider>
        </Providers>
      </body>
    </html>
  )
}

