import NextCors from 'nextjs-cors'
import enviroments from '@/config/enviroments'
import type { NextApiRequest, NextApiResponse } from 'next'
import { IEmailSendDTO } from '@/interfaces/email.interface'
import { EMAIL_LIST } from '@/config/email/email-list.config'
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend'

type ResponseData = { message: string; error?: any }

const getService = () => {
    const apiKey = enviroments.mailersend_api_key

    const params = new EmailParams()
    const service = new MailerSend({ apiKey })

    return { service, params }
}

const buildEmailList = (list: string[]) => list.map(i => new Recipient(i))

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        optionsSuccessStatus: 200,
        origin: '*'
    })

    try {
        const { service, params } = getService()

        const payload = req.body as IEmailSendDTO
        const fromEmail = payload.from || EMAIL_LIST.sender.admin

        const from = new Sender(fromEmail)
        const cc = buildEmailList(payload.cc || [])
        const recipients = buildEmailList(payload.to)

        params
            .setCc(cc)
            .setFrom(from)
            .setTo(recipients)
            .setHtml(payload.html)
            .setSubject(payload.subject)

        await service.email.send(params)

        res.status(200).json({ message: 'Email enviado com sucesso' })
    } catch (error) {
        res.status(400).json({
            message: 'Ocorreu um erro ao enviar email',
            error
        })
    }
}
