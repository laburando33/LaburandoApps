"use client"

import type React from "react"
import { useState } from "react"
import { View, StyleSheet, Text, Platform } from "react-native"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { AdaptiveButton } from "@/components/ui/adaptive-button"
import { useToast } from "@/lib/useToast"

// Importamos TextInput condicionalmente
let TextInput: any
if (Platform.OS !== "web") {
  TextInput = require("react-native").TextInput
}

// Define the type for your navigation prop
type RootStackParamList = {
  Login: undefined
  ResetPassword: undefined
  Dashboard: undefined
}

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">

type Props = {
  navigation?: LoginScreenNavigationProp
}

const LoginForm: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()
  const { showToast } = useToast()

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      showToast({
        type: "success",
        title: "Inicio de sesión exitoso",
        description: "Has iniciado sesión correctamente.",
      })
      if (Platform.OS === "web") {
        router.push("/dashboard")
      } else {
        navigation?.navigate("Dashboard")
      }
    } catch (error) {
      showToast({
        type: "error",
        title: "Error de inicio de sesión",
        description: error instanceof Error ? error.message : "Ha ocurrido un error al iniciar sesión.",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = () => {
    if (Platform.OS === "web") {
      router.push("/reset-password")
    } else {
      navigation?.navigate("ResetPassword")
    }
  }

  const renderInput = (
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void,
    secureTextEntry = false,
  ) => {
    if (Platform.OS === "web") {
      return (
        <input
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChangeText(e.target.value)}
          type={secureTextEntry ? "password" : "text"}
        />
      )
    } else {
      return (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      )
    }
  }

  return (
    <View style={styles.container}>
      {renderInput("Correo electrónico", email, setEmail)}
      {renderInput("Contraseña", password, setPassword, true)}
      <AdaptiveButton onPress={handleSubmit} disabled={loading}>
        {loading ? "Iniciando sesión..." : "Iniciar sesión"}
      </AdaptiveButton>
      <AdaptiveButton onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </AdaptiveButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  forgotPassword: {
    color: "blue",
    marginTop: 12,
    textAlign: "center",
  },
})

export default LoginForm

