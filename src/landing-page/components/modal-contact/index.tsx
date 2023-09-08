import Styles from './styles'
import analytics from './analytics'
import { setLoading } from '@/hooks'
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import LPBudgetFlow from '../contact/budget-flow'
import LPContactForm from '../contact/contact-form'
import AppModal from '@/components/common/app-modal'
import { useWindowSize } from '@/hooks/window-size.hook'
import LPContactSuccess from '../contact/contact-success'
import { IEmailSendDTO } from '@/interfaces/email.interface'
import { EMAIL_LIST } from '@/config/email/email-list.config'
import { EmailService } from '@/services/common/email.service'
import { AlertService } from '@/services/common/alert.service'
import { IBudgetSectionAnswer } from '../budget/budget-section'
import { IContactUserData } from '@/interfaces/contact.interface'
import { getBudgetTemplate } from '@/templates/send-budget.template'
import { AppModalInterface } from '@/interfaces/_app-modal.interface'
import { WhatsAppService } from '@/services/common/whatsapp.service'
import { WHATSAPP_CONTACT } from '@/contants/whatsapp.contant'
import { getBudgetWhatsappTemplate } from '@/templates/send-budget-whatsapp.template'

const emailService = new EmailService()
const alertService = new AlertService()
const whatsAppService = new WhatsAppService()

interface IModalContactProps extends AppModalInterface {}

const LPModalContact: React.FC<IModalContactProps> = props => {
    const { isOpen, onClose, onBackdropClick = () => {} } = props
    const { isMobile } = useWindowSize()

    const [userData, setUserData] = useState<IContactUserData | null>(null)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const hasUserData = !!userData

    const sendMessage = () => {
        const msg = `Olá, vim através do site e tenho interesse em marcar uma visita ao Colégio`
        whatsAppService.sendMessage(WHATSAPP_CONTACT, msg)
    }

    const handleSubmitForm = async (model: IContactUserData) => {
        setUserData(model)
        setLoading(true, 'Enviando o seu contato...')

        try {
            const emailDTO: IEmailSendDTO = {
                subject: 'Proposta comercial',
                to: [EMAIL_LIST.receiver.budget],
                html: getBudgetTemplate(model)
            }

            const { data } = await emailService.send(emailDTO)
            const whatsappMessage = getBudgetWhatsappTemplate(model)
            whatsAppService.sendMessage(WHATSAPP_CONTACT, whatsappMessage)

            setIsSuccess(true)
            analytics.emitFinish()
            alertService.success(data.message)
        } catch (error) {
            alertService.error('Ocorreu um erro ao enviar o contato')
        } finally {
            setLoading(false)
        }
    }

    const form = <LPContactForm onSubmit={handleSubmitForm} />
    const success = <LPContactSuccess />

    const getCurrentContent = () => {
        if (!hasUserData) return <>{form}</>
        else return <>{success}</>
    }

    const handleClose = () => {
        if (onClose) onClose()
    }

    return (
        <AppModal
            width="80vw"
            maxHeight="98vh"
            maxWidth="1200px"
            isOpen={isOpen}
            isFull={isMobile}
            showMobileHeader={isMobile}
            containerStyle={{ padding: 10 }}
            onBackdropClick={onBackdropClick}
            onMobileHeaderClick={handleClose}
            backdropStyle={{ paddingTop: '4px', justifyContent: 'center' }}
        >
            <Styles.Container>
                <Styles.ButtonClose onClick={handleClose}>
                    <IoMdClose />
                </Styles.ButtonClose>

                {getCurrentContent()}
            </Styles.Container>
        </AppModal>
    )
}

export default LPModalContact
