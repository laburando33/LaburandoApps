declare module "react-native" {
  import type { ComponentType } from "react"

  export const View: ComponentType<ViewProps>
  export const Text: ComponentType<TextProps>
  export const TouchableOpacity: ComponentType<TouchableOpacityProps>
  export const StyleSheet: {
    create: <T extends Record<string, any>>(styles: T) => T
  }
  export const Platform: {
    OS: "web" | "ios" | "android"
    select: <T extends Record<string, any>>(spec: T) => T[keyof T]
  }

  export interface ViewProps {
    style?: any
    [key: string]: any
  }

  export interface TextProps {
    style?: any
    [key: string]: any
  }

  export interface TouchableOpacityProps {
    style?: any
    onPress?: () => void
    [key: string]: any
  }

  // Add other components and APIs as needed
}

