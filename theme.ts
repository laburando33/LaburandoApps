import { extendTheme } from "@chakra-ui/theme-utils"


const theme = extendTheme({
  // Aquí puedes añadir tus personalizaciones
  // Por ejemplo:
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
})

export default theme

