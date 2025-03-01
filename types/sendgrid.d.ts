declare module "@sendgrid/mail" {
    export interface MailDataRequired {
      to: string
      from: string
      subject: string
      text?: string
      html?: string
    }
  
    export interface MailService {
      setApiKey(apiKey: string): void
      send(data: MailDataRequired): Promise<[{}, {}]>
    }
  
    const mail: MailService
    export default mail
  }
  
  