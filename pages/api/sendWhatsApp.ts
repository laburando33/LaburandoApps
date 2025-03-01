import type { NextApiRequest, NextApiResponse } from "next"
import twilio from "twilio"

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = twilio(accountSid, authToken)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` })
  }

  const { to, body } = req.body

  if (!to || !body) {
    return res.status(400).json({ success: false, error: "Missing 'to' or 'body' in request" })
  }

  try {
    const message = await client.messages.create({
      body,
      from: "whatsapp:+12695576944", // Cambiar si usas otro número
      to: `whatsapp:${to}`,
    })

    res.status(200).json({ success: true, messageSid: message.sid })
  } catch (error) {
    console.error("Twilio error:", error)
    res.status(500).json({ success: false, error: error instanceof Error ? error.message : "Unknown error" })
  }
}