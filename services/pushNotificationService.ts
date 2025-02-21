import { Platform } from "react-native"
import * as ExpoNotifications from "expo-notifications"

export type ExpoPushToken = string

export async function registerForPushNotificationsAsync(): Promise<ExpoPushToken | undefined> {
  if (typeof window === "undefined" || Platform.OS === "web") {
    // Server-side rendering or web platform, return early
    return undefined
  }

  let token: ExpoPushToken | undefined

  try {
    if (Platform.OS === "android") {
      await ExpoNotifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: ExpoNotifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      })
    }

    const { status: existingStatus } = await ExpoNotifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== "granted") {
      const { status } = await ExpoNotifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!")
      return
    }
    token = (await ExpoNotifications.getExpoPushTokenAsync()).data
  } catch (error) {
    console.error("Error registering for push notifications:", error)
  }

  return token
}

export async function sendPushNotification(expoPushToken: ExpoPushToken, title: string, body: string): Promise<void> {
  if (typeof window === "undefined" || Platform.OS === "web") {
    // Server-side rendering or web platform, return early
    return
  }

  const message = {
    to: expoPushToken,
    sound: "default",
    title: title,
    body: body,
    data: { someData: "goes here" },
  }

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  })
}

