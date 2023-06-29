export interface IEmailSendDTO {
    to: string[]
    html: string
    cc?: string[]
    from?: string
    subject: string
}
