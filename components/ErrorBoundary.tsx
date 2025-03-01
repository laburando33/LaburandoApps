import { Component, type ErrorInfo, type ReactNode } from "react"
import { View, Text } from "react-native"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_error: Error): State {
    // Cambiamos '_' por '_error' para evitar el error de ESLint
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Sorry.. there was an error</Text>
        </View>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

