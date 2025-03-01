export const setNotificationChannelAsync = async () => {}
export const AndroidImportance = {
  DEFAULT: 3,
  MAX: 5,
  HIGH: 4,
  LOW: 2,
  MIN: 1,
}
export const getPermissionsAsync = async () => ({ status: "granted" })
export const requestPermissionsAsync = async () => ({ status: "granted" })
export const getExpoPushTokenAsync = async () => ({ data: "dummy-token" })

export default {
  setNotificationChannelAsync,
  AndroidImportance,
  getPermissionsAsync,
  requestPermissionsAsync,
  getExpoPushTokenAsync,
}

