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
  Omit<TouchableOpacityProps, keyof WebButtonProps> & {
    children: React.ReactNode
    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    onPress?: () => void
  }

const MobileButton = React.forwardRef<TouchableOpacity, AdaptiveButtonProps>(
  ({ children, style, textStyle, onPress, ...props }, ref) => (
    <TouchableOpacity ref={ref} style={[styles.button, style]} onPress={onPress} {...props}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
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

