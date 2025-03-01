import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"
import type React from "react"

const Hero: React.FC = () => {
  return (
    <Box bg="primary.500" color="white" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={8} alignItems="center" textAlign="center">
          <Heading as="h1" size="3xl">
            Encuentra profesionales de confianza
          </Heading>
          <Text fontSize="xl" maxW="2xl">
            Conectamos tus proyectos con los mejores expertos locales. Rápido, fácil y seguro.
          </Text>
          <Link href="/services" passHref>
            <Button size="lg" colorScheme="white" variant="outline">
              Explorar servicios
            </Button>
          </Link>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero

