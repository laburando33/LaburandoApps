import type { MailService } from "@sendgrid/mail"
import twilio from "twilio"

let sgMail: MailService

// Importación dinámica de SendGrid
if (typeof window === "undefined") {
  import("@sendgrid/mail")
    .then((module) => {
      sgMail = module.default
      sgMail.setApiKey(process.env.SENDGRID_API_KEY || "")
    })
    .catch((err) => {
      console.error("Error importing SendGrid:", err)
    })
}

// Configurar Twilio
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

export { sgMail, twilioClient }

