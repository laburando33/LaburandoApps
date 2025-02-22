import { View, Text, StyleSheet, Platform } from "react-native"
import LoginForm from "@/components/LoginForm"
import { Box, Heading } from "@chakra-ui/react"

export default function LoginPage() {
  if (Platform.OS === "web") {
    return (
      <Box maxWidth="container.md" margin="auto" padding={8}>
        <Heading as="h1" size="xl" marginBottom={6}>
          Iniciar Sesión
        </Heading>
        <LoginForm />
      </Box>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <View style={styles.formContainer}>
        <LoginForm />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
  },
})

