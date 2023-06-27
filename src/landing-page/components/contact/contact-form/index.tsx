import React from 'react'
import Styles from './styles'
import LPButton from '../../button'
import images from '@/assets/images'
import { FiUser } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { FaWhatsapp } from 'react-icons/fa'
import { useMask } from '@/hooks/mask.hook'
import { HiOutlineMail } from 'react-icons/hi'
import landingPage from '@/assets/landing-page'
import { yupResolver } from '@hookform/resolvers/yup'
import AppInput from '@/components/common/@form/app-input'
import { IContactUserData } from '@/interfaces/contact.interface'
import { contactUserDataSchema } from '@/schemas/contact.schema'
import AppButton from '@/components/common/@button/app-button'

interface ILPContactFormProps {
    onSubmit: (model: IContactUserData) => void
}

const LPContactForm: React.FC<ILPContactFormProps> = props => {
    const { onSubmit } = props

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
            <Styles.Image src={landingPage.AvatarContact} />

            <Styles.Form onSubmit={_onSubmit}>
                <Styles.ImageLogo src={images.Logo} />

                <Styles.Title>
                    Somos apaixonados por novas ideias, projetos inovadores e
                    com potencial de revolucionar o mercado e melhorar a vida
                    dos clientes!
                </Styles.Title>

                <Styles.Text>
                    Deixe os seus dados abaixo que nós vamos entrar em contato
                    com você para <Styles.Bold>entender</Styles.Bold> melhor
                    como podemos ajudar a potencializar o
                    <Styles.Bold> sucesso</Styles.Bold> do seu projeto!
                </Styles.Text>

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

                <Styles.Small>Tempo de resposta: Até 1 hora.</Styles.Small>
            </Styles.Form>
        </Styles.Container>
    )
}

export default LPContactForm
