import type React from "react"

declare module 'expo-notifications';
declare module '@expo/vector-icons/*';
declare module "*.ttf"
declare module "*.otf"
declare module "@expo/vector-icons/*"
declare module "expo-modules-core"
declare module "expo-font"
declare module "expo-asset"

declare module "react-native-web" {
  export * from "react-native"
}

/// <reference types="react-native" />
/// <reference types="react-native-web" />

declare module "react-native-safe-area-context" {
  import type { ReactNode } from "react"
  import type { ViewProps } from "react-native"

  export interface SafeAreaProviderProps extends ViewProps {
    children: ReactNode
  }

  export const SafeAreaProvider: React.FC<SafeAreaProviderProps>

  export * from "react-native-safe-area-context/lib/typescript/src/SafeArea.types"
}

declare global {
  interface Window {
    Expo: any
  }
}

declare module "*.png" {
  const value: any
  export = value
}

declare module "*.jpg" {
  const value: any
  export = value
}

declare module "*.svg" {
  const value: any
  export = value
}

declare module "@chakra-ui/react" {
  export * from "@chakra-ui/react/dist/index"
}