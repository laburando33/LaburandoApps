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

  export interface ViewStyle {
    [key: string]: any
  }

  export interface TextStyle {
    [key: string]: any
  }

  export type StyleProp<T> = T | T[] | null

  export interface ViewProps {
    style?: StyleProp<ViewStyle>
    [key: string]: unknown
  }

  export interface TextProps {
    style?: StyleProp<TextStyle>
    [key: string]: unknown
  }

  export interface TouchableOpacityProps {
    style?: StyleProp<ViewStyle>
    onPress?: () => void
    [key: string]: unknown
  }

  // Add other components and APIs as needed
}

