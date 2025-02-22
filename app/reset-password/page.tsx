"use client"
import { View, Text, StyleSheet } from "react-native"
import PasswordResetForm from "@/components/PasswordResetForm"

export default function ResetPasswordPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restablecer Contraseña</Text>
      <View style={styles.formContainer}>
        <PasswordResetForm />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  formContainer: {
    maxWidth: 400,
    width: "100%",
    alignSelf: "center",
  },
})

