import { emailClient } from '@/config/http'

export class EmailService {
    send(formData: any) {
        return emailClient.post('/email/send', formData)
    }
}
