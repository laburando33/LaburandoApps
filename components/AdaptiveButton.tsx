import type React from "react"
import { Button as ChakraButton } from "@chakra-ui/react"
import { TouchableOpacity, Text, Platform } from "react-native"

interface AdaptiveButtonProps {
  onPress: () => void
  children: React.ReactNode
}

export const AdaptiveButton: React.FC<AdaptiveButtonProps> = ({ onPress, children }) => {
  if (Platform.OS === "web") {
    return <ChakraButton onClick={onPress}>{children}</ChakraButton>
  } else {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text>{children}</Text>
      </TouchableOpacity>
    )
  }
}

