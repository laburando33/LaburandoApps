import type React from "react"
import { Button as ChakraButton } from "@chakra-ui/react"
import { TouchableOpacity, Text, Platform } from "react-native"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  onPress?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, onPress, disabled, type = "button" }) => {
  if (Platform.OS === "web") {
    return (
      <ChakraButton onClick={onClick} isDisabled={disabled} type={type}>
        {children}
      </ChakraButton>
    )
  } else {
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Text>{children}</Text>
      </TouchableOpacity>
    )
  }
}

