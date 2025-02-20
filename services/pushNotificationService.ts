import { Platform } from "react-native"

// Conditional import for Expo notifications
let ExpoNotifications: typeof import("expo-notifications") | null = null
if (Platform.OS !== "web") {
  ExpoNotifications = require("expo-notifications")
}

export type ExpoPushToken = string

export async function registerForPushNotificationsAsync(): Promise<ExpoPushToken | undefined> {
  if (typeof window === "undefined" || !ExpoNotifications) {
    // Server-side rendering or web platform, return early
    return undefined
  }

  const token: ExpoPushToken | undefined = await ExpoNotifications.getExpoPushTokenAsync().then(
    (response) => response.data,
  )

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

  return token
}

export async function sendPushNotification(expoPushToken: ExpoPushToken, title: string, body: string): Promise<void> {
  if (typeof window === "undefined" || !ExpoNotifications) {
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

