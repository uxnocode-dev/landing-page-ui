import { emailClient } from '@/config/http'
import { IEmailSendDTO } from '@/interfaces/email.interface'

export class EmailService {
    send(data: IEmailSendDTO) {
        return emailClient.post('/email/send', data)
    }
}
