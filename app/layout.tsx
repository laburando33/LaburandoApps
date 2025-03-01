'use client';

import React from "react"
import type { Metadata } from "next"
import dynamic from 'next/dynamic'

const DynamicClientLayout = dynamic(() => import('./ClientLayout'), { ssr: false })

export const metadata: Metadata = {
  title: "LaburandoApp",
  description: "Conectando profesionales con clientes",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <DynamicClientLayout>{children}</DynamicClientLayout>
      </body>
    </html>
  )
}