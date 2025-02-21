import type React from "react"
import { View, Text, StyleSheet } from "react-native"
import type { ViewStyle } from "react-native"
import { AdaptiveButton } from "@/components/ui/adaptive-button"

interface TestComponentProps {
  title: string
  description: string
  onPress: () => void
  style?: ViewStyle
}

const TestComponent: React.FC<TestComponentProps> = ({ title, description, onPress, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <AdaptiveButton onPress={onPress} style={styles.button as ViewStyle}>
        Press me
      </AdaptiveButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default TestComponent

