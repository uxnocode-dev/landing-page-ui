import SMTPTransport from 'nodemailer/lib/smtp-transport'

export const TRANSPORT_CONFIG: SMTPTransport.Options = {
    port: 587,
    host: 'smtp.mandrillapp.com',
    auth: {
        // privateKey: 'md-H5uRo5YPVItbQs2mWDALdQ'
        user: 'uxnocode',
        pass: 'md-H5uRo5YPVItbQs2mWDALdQ'
    }
}
