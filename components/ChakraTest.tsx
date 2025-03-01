"use client"

import { Box, Button, useColorMode } from "@chakra-ui/react"

export default function ChakraTest() {
  const { colorMode, toggleColorMode } = useColorMode()

  console.log("Rendering ChakraTest, colorMode:", colorMode)

  return (
    <Box>
      <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button>
    </Box>
  )
}

