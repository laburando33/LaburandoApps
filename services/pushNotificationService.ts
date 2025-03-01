import { Platform } from "react-native"
import * as ExpoNotifications from 'expo-notifications';

export type ExpoPushToken = string

// Creamos un objeto Notifications que funcionará tanto en web como en móvil
const Notifications = {
  setNotificationChannelAsync: ExpoNotifications.setNotificationChannelAsync || (async () => {}),
  AndroidImportance: ExpoNotifications.AndroidImportance || { MAX: 4 },
  getPermissionsAsync: ExpoNotifications.getPermissionsAsync || (async () => ({ status: 'granted' })),
  requestPermissionsAsync: ExpoNotifications.requestPermissionsAsync || (async () => ({ status: 'granted' })),
  getExpoPushTokenAsync: ExpoNotifications.getExpoPushTokenAsync || (async () => ({ data: 'DUMMY_TOKEN' })),
};

export async function registerForPushNotificationsAsync(): Promise<ExpoPushToken | undefined> {
  if (typeof window === "undefined" || Platform.OS === "web") {
    // Server-side rendering or web platform, return early
    return undefined
  }

  let token: ExpoPushToken | undefined

  if (Platform.OS === 'android' || Platform.OS === 'ios') {
    try {
      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        })
      }

      const { status: existingStatus } = await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!")
        return
      }
      token = (await Notifications.getExpoPushTokenAsync()).data
    } catch (error) {
      console.error("Error registering for push notifications:", error)
    }
  } else {
    console.log("Push notifications are not supported on this platform")
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