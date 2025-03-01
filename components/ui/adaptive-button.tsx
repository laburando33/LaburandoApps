import React from "react"
import { Button as WebButton, type ButtonProps as WebButtonProps } from "@/components/ui/button"
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type TouchableOpacityProps,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from "react-native"
import { getPlatformSpecificComponent } from "@/config/platform"

export type AdaptiveButtonProps = WebButtonProps &
  Omit<TouchableOpacityProps, keyof WebButtonProps | "onPress"> & {
    children: React.ReactNode
    style?: StyleProp<ViewStyle> | React.CSSProperties
    textStyle?: StyleProp<TextStyle>
    onPress?: () => void
  }

  const MobileButton = React.forwardRef<React.ElementRef<typeof TouchableOpacity>, AdaptiveButtonProps>(  ({ children, style, textStyle, onPress, ...props }, ref) => (
    <TouchableOpacity
      ref={ref}
      style={[styles.button, style as ViewStyle]}
      onPress={onPress as TouchableOpacityProps["onPress"]}
      {...props}
    >
      <Text style={[styles.text, textStyle as TextStyle]}>{typeof children === "string" ? children : null}</Text>
      {typeof children !== "string" && children}
    </TouchableOpacity>
  ),
)

MobileButton.displayName = "MobileButton"

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  text: {
    color: "white",
    fontSize: 16,
  } as TextStyle,
})

export const AdaptiveButton = getPlatformSpecificComponent<WebButtonProps, AdaptiveButtonProps>(WebButton, MobileButton)

// Compare this snippet from components/IconsLoader.tsx: