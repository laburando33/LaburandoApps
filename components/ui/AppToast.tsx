import { View, Text, StyleSheet } from "react-native"
import type { ToastMessage } from "@/lib/useToast"

interface AppToastProps {
  toast: ToastMessage | null
}

export function AppToast({ toast }: AppToastProps) {
  if (!toast) return null

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{toast.title}</Text>
      {toast.description && <Text style={styles.description}>{toast.description}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 10,
    borderRadius: 5,
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  description: {
    color: "white",
  },
})

