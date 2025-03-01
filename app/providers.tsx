"use client"

import type React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import theme from "@/lib/chakra-theme"
import dynamic from "next/dynamic"

const IconsLoader = dynamic(() => import("@/components/IconsLoader"), { ssr: false })
const IconsStyle = dynamic(() => import("@/components/IconsStyle"), { ssr: false })

export function Providers({ children }: { children: React.ReactNode }) {
  const supabase = createClientComponentClient()

  return (
    <SafeAreaProvider>
      <ChakraProvider theme={theme}>
        <SessionContextProvider supabaseClient={supabase}>
          <IconsLoader />
          <IconsStyle />
          {children}
        </SessionContextProvider>
      </ChakraProvider>
    </SafeAreaProvider>
  )
}

