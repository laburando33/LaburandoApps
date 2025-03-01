import type React from "react"
import { ScrollView, Platform, type ViewStyle } from "react-native"

interface CrossPlatformScrollViewProps {
  children: React.ReactNode
  style?: ViewStyle
}

export const CrossPlatformScrollView: React.FC<CrossPlatformScrollViewProps> = ({ children, style }) => {
  if (Platform.OS === "web") {
    return <div style={{ overflowY: "auto", height: "100%", ...(style as any) }}>{children}</div>
  } else {
    return <ScrollView style={style}>{children}</ScrollView>
  }
}

