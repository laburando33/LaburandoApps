import type React from "react"
import { View, StyleSheet, Platform, type ViewStyle } from "react-native"
import Image from "next/image"

type ImageSource = string | { uri: string }

interface ImageBackgroundProps {
  source: ImageSource
  style?: ViewStyle
  children?: React.ReactNode
}

const CrossPlatformImageBackground: React.FC<ImageBackgroundProps> = ({ source, style, children }) => {
  if (Platform.OS === "web") {
    return (
      <div
        style={{
          ...(style as React.CSSProperties),
          backgroundImage: `url(${typeof source === "string" ? source : source.uri})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    )
  } else {
    const combinedStyle: ViewStyle = {
      ...(style || {}),
      overflow: "hidden",
    }

    return (
      <View style={combinedStyle}>
        <Image
          src={typeof source === "string" ? source : source.uri}
          alt="Background image"
          fill
          style={{ objectFit: "cover" }}
        />
        <View style={StyleSheet.absoluteFillObject}>{children}</View>
      </View>
    )
  }
}

export default CrossPlatformImageBackground

