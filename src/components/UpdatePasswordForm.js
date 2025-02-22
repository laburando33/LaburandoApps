"use client"

import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"
import { createClient } from "@supabase/supabase-js"
import AsyncStorage from "@react-native-async-storage/async-storage"

const supabase = createClient("YOUR_SUPABASE_URL", "YOUR_SUPABASE_ANON_KEY", {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

function UpdatePasswordForm({ navigation }) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleUpdatePassword = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    try {
      const { error } = await supabase.auth.update({ password: password })
      if (error) throw error
      alert("Password updated successfully!")
      // Navigate to login screen or main app screen
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Update Password" onPress={handleUpdatePassword} />
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
})

export default UpdatePasswordForm

