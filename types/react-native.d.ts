declare module "react-native" {
  import type { ComponentType } from "react"

  export const View: ComponentType<ViewProps>
  export const Text: ComponentType<TextProps>
  export const TouchableOpacity: ComponentType<TouchableOpacityProps>
  export const TextInput: ComponentType<TextInputProps>
  export const ScrollView: ComponentType<ScrollViewProps>
  export const StyleSheet: {
    absoluteFillObject: StyleProp<ViewStyle> | undefined
    absoluteFill: any
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

  export interface TextInputProps {
    style?: StyleProp<TextStyle>
    value?: string
    onChangeText?: (text: string) => void
    secureTextEntry?: boolean
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad"
    [key: string]: unknown
  }

  export interface ScrollViewProps {
    style?: StyleProp<ViewStyle>
    [key: string]: unknown
  }
}

