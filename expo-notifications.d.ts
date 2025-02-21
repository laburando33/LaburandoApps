declare module "expo-notifications" {
    export function getExpoPushTokenAsync(): Promise<{ data: string }>
    export function getPermissionsAsync(): Promise<{ status: string }>
    export function requestPermissionsAsync(): Promise<{ status: string }>
    export function setNotificationChannelAsync(
      channelId: string,
      channel: {
        name: string
        importance: number
        vibrationPattern: number[]
        lightColor: string
      },
    ): Promise<void>
  
    export const AndroidImportance: {
      MAX: number
    }
  }
  
  