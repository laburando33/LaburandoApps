import React from "react"
import { Button as WebButton, type ButtonProps as WebButtonProps } from "@/components/ui/button"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import type { ComponentProps } from "react"
import { getPlatformSpecificComponent } from "@/config/platform"

// Define a union type that includes both web and mobile props
export type AdaptiveButtonProps = WebButtonProps &
  Omit<ComponentProps<typeof TouchableOpacity>, keyof WebButtonProps> & {
    children: React.ReactNode
  }

const MobileButton = React.forwardRef<typeof TouchableOpacity, AdaptiveButtonProps>(
  ({ children, style, ...props }, ref) => (
    <TouchableOpacity ref={ref as any} style={[styles.button, style]} {...props}>
      <Text style={styles.text}>{children}</Text>
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
  },
  text: {
    color: "white",
    fontSize: 16,
  },
})

export const AdaptiveButton = getPlatformSpecificComponent<WebButtonProps, AdaptiveButtonProps>(WebButton, MobileButton)

