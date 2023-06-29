import Styles from './styles'
import { setLoading } from '@/hooks'
import React, { useState } from 'react'
import { IEmailSendDTO } from '@/interfaces/email.interface'
import { EMAIL_LIST } from '@/config/email/email-list.config'
import { AlertService } from '@/services/common/alert.service'
import { EmailService } from '@/services/common/email.service'
import { IContactUserData } from '@/interfaces/contact.interface'
import { getBudgetTemplate } from '@/templates/send-budget.template'
import LPBudgetFlow from '@/landing-page/components/contact/budget-flow'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import LPContactForm from '@/landing-page/components/contact/contact-form'
import LPContactSuccess from '@/landing-page/components/contact/contact-success'
import { IBudgetSectionAnswer } from '@/landing-page/components/budget/budget-section'

const emailService = new EmailService()
const alertService = new AlertService()

const LPContact: React.FC = () => {
    const [userData, setUserData] = useState<IContactUserData | null>(null)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const hasUserData = !!userData

    const handleSubmitForm = (model: IContactUserData) => {
        setUserData(model)
    }

    const handleSubmitFlow = async (model: IBudgetSectionAnswer[]) => {
        if (!userData) return

        setLoading(true, 'Enviando o seu contato...')

        try {
            const emailDTO: IEmailSendDTO = {
                subject: 'Proposta comercial',
                to: [EMAIL_LIST.receiver.budget],
                html: getBudgetTemplate(userData, model)
            }

            console.log(emailDTO.html)

            const { data } = await emailService.send({})
            setIsSuccess(true)
            alertService.success(data.message)
        } catch (error) {
            alertService.error('Ocorreu um erro ao enviar o contato')
        } finally {
            setLoading(false)
        }
    }

    const form = <LPContactForm onSubmit={handleSubmitForm} />
    const flow = <LPBudgetFlow onSubmit={handleSubmitFlow} />
    const success = <LPContactSuccess />

    const getCurrentContent = () => {
        if (!hasUserData) return <>{form}</>
        if (hasUserData && !isSuccess) return <>{flow}</>
        else return <>{success}</>
    }

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.contact}>
            <Styles.Content>{getCurrentContent()}</Styles.Content>
        </Styles.Container>
    )
}

export default LPContact
