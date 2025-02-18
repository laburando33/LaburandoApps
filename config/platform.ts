import { Platform } from "react-native"
import type { ComponentType } from "react"

export const isPlatformWeb = () => Platform.OS === "web"
export const isPlatformMobile = () => Platform.OS === "ios" || Platform.OS === "android"

export function getPlatformSpecificComponent<WebProps, MobileProps>(
  WebComponent: ComponentType<WebProps>,
  MobileComponent: ComponentType<MobileProps>,
): ComponentType<WebProps & MobileProps> {
  return (isPlatformWeb() ? WebComponent : MobileComponent) as ComponentType<WebProps & MobileProps>
}

