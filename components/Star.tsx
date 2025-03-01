import type React from "react"
import { Ionicons } from "@expo/vector-icons"

interface StarProps {
  selected: boolean
  onSelect: () => void
}

const Star: React.FC<StarProps> = ({ selected, onSelect }) => {
  return (
    <Ionicons
      name={selected ? "star" : "star-outline"}
      size={24}
      color={selected ? "gold" : "gray"}
      onPress={onSelect}
    />
  )
}

export default Star

