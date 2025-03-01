import type React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import Home from "./app/page"

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  )
}

export default App

