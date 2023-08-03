import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import { FiUser } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { FaWhatsapp } from 'react-icons/fa'
import { useMask } from '@/hooks/mask.hook'
import { HiOutlineMail } from 'react-icons/hi'
import landingPage from '@/assets/landing-page'
import { yupResolver } from '@hookform/resolvers/yup'
import { useWindowSize } from '@/hooks/window-size.hook'
import AppInput from '@/components/common/@form/app-input'
import AppButton from '@/components/common/@button/app-button'
import { contactUserDataSchema } from '@/schemas/contact.schema'
import { IContactUserData } from '@/interfaces/contact.interface'

interface ILPContactFormProps {
    onSubmit: (model: IContactUserData) => void
}

const LPContactForm: React.FC<ILPContactFormProps> = props => {
    const { onSubmit } = props
    const { isMobile } = useWindowSize()

    const imageURL = !isMobile
        ? landingPage.AvatarContactModal
        : landingPage.AvatarContactModalMobile

    const phoneNumberMask = useMask('phoneNumber')

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<IContactUserData>({
        mode: 'onChange',
        resolver: yupResolver(contactUserDataSchema)
    })

    const _onSubmit = handleSubmit((model: IContactUserData) => {
        onSubmit(model)
    })

    return (
        <Styles.Container>
            <Styles.Image src={imageURL} />

            <Styles.Form onSubmit={_onSubmit}>
                <Styles.ImageLogo src={images.Logo} />

                <Styles.Title>
                    Quero entender melhor você e o seu projeto. Vou pedir para
                    você responder 5 perguntas bem rápidas e já vamos para o
                    nosso papo.
                </Styles.Title>

                <Styles.ColoredText>
                    Não se preocupe, vai levar menos de 2 minutos!
                </Styles.ColoredText>

                <Styles.FieldContainer>
                    <AppInput
                        id="name"
                        icon={<FiUser />}
                        error={errors.name}
                        register={register}
                        placeholder="Seu nome"
                    />
                    <AppInput
                        id="email"
                        type="email"
                        register={register}
                        error={errors.email}
                        icon={<HiOutlineMail />}
                        placeholder="Seu melhor e-mail"
                    />
                    <AppInput
                        id="telephone"
                        register={register}
                        icon={<FaWhatsapp />}
                        error={errors.telephone}
                        placeholder="(00) 00000-0000"
                        {...phoneNumberMask.directive}
                    />

                    <AppButton
                        isDisabled={!isValid}
                        className="self-end sm:w-full sm:mt-4"
                    >
                        Enviar
                    </AppButton>
                </Styles.FieldContainer>

                <Styles.Small>
                    Nós vamos responder esse contato no máximo em 1 hora.
                </Styles.Small>
            </Styles.Form>
        </Styles.Container>
    )
}

export default LPContactForm
