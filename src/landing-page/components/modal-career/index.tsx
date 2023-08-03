import React from 'react'
import Styles from './styles'
import analytics from './analytics'
import { setLoading } from '@/hooks'
import images from '@/assets/images'
import { BiLink } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { IoMdClose } from 'react-icons/io'
import { HiOutlineMail } from 'react-icons/hi'
import landingPage from '@/assets/landing-page'
import AppModal from '@/components/common/app-modal'
import { yupResolver } from '@hookform/resolvers/yup'
import { useWindowSize } from '@/hooks/window-size.hook'
import AppInput from '@/components/common/@form/app-input'
import { careerFormSchema } from '@/schemas/career.schema'
import AppRadio from '@/components/common/@form/app-radio'
import { ICareerForm } from '@/interfaces/career.interface'
import { IEmailSendDTO } from '@/interfaces/email.interface'
import { EMAIL_LIST } from '@/config/email/email-list.config'
import AppButton from '@/components/common/@button/app-button'
import { EmailService } from '@/services/common/email.service'
import { AlertService } from '@/services/common/alert.service'
import { getCareerTemplate } from '@/templates/send-career.template'
import { AppModalInterface } from '@/interfaces/_app-modal.interface'

const emailService = new EmailService()
const alertService = new AlertService()

interface IModalSuccessProps extends AppModalInterface {}

const LPModalCareer: React.FC<IModalSuccessProps> = props => {
    const { isOpen, onClose, onBackdropClick = () => {} } = props
    const { isMobile } = useWindowSize()

    const imageURL = !isMobile
        ? landingPage.AvatarCareer
        : landingPage.AvatarCareerMobile

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<ICareerForm>({
        mode: 'onChange',
        resolver: yupResolver(careerFormSchema)
    })

    const onSubmit = handleSubmit(async (model: ICareerForm) => {
        try {
            setLoading(true, 'Enviando o seu contato...')
            const emailDTO: IEmailSendDTO = {
                subject: 'Carreira',
                to: [EMAIL_LIST.receiver.budget],
                html: getCareerTemplate(model)
            }

            const { data } = await emailService.send(emailDTO)
            alertService.success(data.message)
            analytics.emitSend(model.role)
            handleClose()
            reset()
        } catch (error) {
            alertService.error('Ocorreu um erro ao enviar o contato')
        } finally {
            setLoading(false)
        }
    })

    const handleClose = () => {
        if (onClose) onClose()
    }

    return (
        <AppModal
            width="76vw"
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

                <Styles.AvatarImage src={imageURL} />

                <Styles.Form onSubmit={onSubmit}>
                    <Styles.Logoimage src={images.Logo} />
                    <Styles.Text>
                        Além de entender o nosso cliente, nós também entendemos
                        você! Afinal, nós também somos devs e designers . Vem
                        ser uxnocoder!
                    </Styles.Text>

                    <AppRadio
                        id="role"
                        error={errors.role}
                        register={register}
                        data={[
                            { value: 'Desenvolvedor', label: 'Sou DEV' },
                            { value: 'Designer', label: 'Sou designer' }
                        ]}
                    />

                    <AppInput
                        id="name"
                        icon={<FiUser />}
                        register={register}
                        error={errors.name}
                        placeholder="Seu nome"
                    />

                    <AppInput
                        id="email"
                        register={register}
                        error={errors.email}
                        icon={<HiOutlineMail />}
                        placeholder="Seu melhor e-mail"
                    />

                    <AppInput
                        id="portfolioURL"
                        icon={<BiLink />}
                        register={register}
                        error={errors.portfolioURL}
                        placeholder="Link do seu portfólio"
                    />

                    <AppButton
                        type="submit"
                        isDisabled={!isValid}
                        className="self-end mt-auto sm:mt-4 flex sm:self-center sm:w-full"
                    >
                        Enviar
                    </AppButton>
                </Styles.Form>
            </Styles.Container>
        </AppModal>
    )
}

export default LPModalCareer
