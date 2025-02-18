import type { NextApiRequest, NextApiResponse } from "next"
import twilio from "twilio"

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = twilio(accountSid, authToken)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { to, body } = req.body

    try {
      const message = await client.messages.create({
        body: body,
        from: "whatsapp:+12695576944", // Your Twilio WhatsApp number
        to: `whatsapp:${to}`,
      })

      res.status(200).json({ success: true, messageSid: message.sid })
    } catch (error) {
      const err = error as Error
      res.status(500).json({ success: false, error: err.message })
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

