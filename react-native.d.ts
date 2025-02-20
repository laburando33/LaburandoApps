declare module "react-native" {
  import type { ComponentType } from "react"

  export const View: ComponentType<ViewProps>
  export const Text: ComponentType<TextProps>
  export const TouchableOpacity: ComponentType<TouchableOpacityProps>
  export const StyleSheet: {
    create: <T extends Record<string, unknown>>(styles: T) => T
  }
  export const Platform: {
    OS: "web" | "ios" | "android"
    select: <T extends Record<string, unknown>>(spec: T) => T[keyof T]
  }

  export interface ViewProps {
    style?: Record<string, unknown>
    [key: string]: unknown
  }

  export interface TextProps {
    style?: Record<string, unknown>
    [key: string]: unknown
  }

  export interface TouchableOpacityProps {
    style?: Record<string, unknown>
    onPress?: () => void
    [key: string]: unknown
  }

  // Add other components and APIs as needed
}

