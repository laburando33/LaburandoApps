import React from "react"
import { Platform } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface IconProps {
  name: React.ComponentProps<typeof Ionicons>["name"]
  size?: number
  color?: string
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "black" }) => {
  if (Platform.OS === "web") {
    // For web, use Ionicons directly
    return <Ionicons name={name} size={size} color={color} />
  }

  // For mobile, use Ionicons normally
  return <Ionicons name={name} size={size} color={color} />
}

export default Icon