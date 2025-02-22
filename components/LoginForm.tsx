"use client"

import { useState } from "react"
import { Box, Input, Text, Button, VStack, useToast } from "@chakra-ui/react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()
  const toast = useToast()

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Error de inicio de sesión",
        description: error instanceof Error ? error.message : "Ha ocurrido un error al iniciar sesión.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box p={4} borderWidth={1} borderRadius="lg">
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          Iniciar Sesión
        </Text>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Correo electrónico" />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Contraseña"
        />
        <Button
          onClick={handleLogin}
          isLoading={isLoading}
          loadingText="Iniciando sesión..."
          colorScheme="blue"
          width="full"
        >
          Iniciar sesión
        </Button>
      </VStack>
    </Box>
  )
}

