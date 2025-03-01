import type React from "react"
import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const SwipeRating: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null)

  const icons = [
    { name: "star", color: "gold" },
    { name: "heart", color: "red" },
    { name: "rocket", color: "blue" },
    { name: "notifications", color: "green" },
  ]

  return (
    <View style={styles.container}>
      {icons.map((icon) => (
        <Ionicons
          key={icon.name}
          name={icon.name as keyof typeof Ionicons.glyphMap}
          size={30}
          color={selectedIcon === icon.name ? icon.color : "gray"}
          onPress={() => setSelectedIcon(icon.name)}
          style={styles.icon}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row" as const,
    justifyContent: "space-around",
    padding: 20,
  },
  icon: {
    opacity: 0.7,
  },
})

export default SwipeRating

