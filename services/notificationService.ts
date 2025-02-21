import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/lib/database.types"
import { sendPushNotification, type ExpoPushToken } from "./pushNotificationService"

const supabase = createClientComponentClient<Database>()

export const sendNotification = async (userId: string, title: string, body: string) => {
  try {
    const { data, error } = await supabase.from("notifications").insert([{ user_id: userId, title, body, read: false }])

    if (error) throw error

    // Obtener el token de notificación push del usuario
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("push_token")
      .eq("id", userId)
      .single()

    if (userError) throw userError

    if (userData && userData.push_token) {
      await sendPushNotification(userData.push_token as ExpoPushToken, title, body)
    }

    console.log("Notification saved and sent:", data)
  } catch (error) {
    console.error("Error sending notification:", error)
  }
}

export const sendWhatsAppMessage = async (phoneNumber: string, message: string) => {
  try {
    const { data, error } = await supabase.rpc("send_whatsapp_message", {
      phone_number: phoneNumber,
      message_body: message,
    })

    if (error) throw error

    console.log("WhatsApp message sent:", data)
    return data
  } catch (error) {
    console.error("Error sending WhatsApp message:", error)
    throw error
  }
}

