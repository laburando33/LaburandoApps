import { useToast as useChakraToast } from "@chakra-ui/react"
import { Platform } from "react-native"

type ToastType = "success" | "error" | "info" | "warning"

interface ToastOptions {
  type: ToastType
  title: string
  description: string
}

export const useAppToast = () => {
  const chakraToast = useChakraToast()

  const showToast = ({ type, title, description }: ToastOptions) => {
    if (Platform.OS === "web") {
      chakraToast({
        title,
        description,
        status: type,
        duration: 3000,
        isClosable: true,
      })
    } else {
      // Aquí puedes usar una librería de toasts para React Native
      // Por ejemplo, react-native-toast-message
      console.log(`${type.toUpperCase()}: ${title} - ${description}`)
    }
  }

  return { showToast }
}

