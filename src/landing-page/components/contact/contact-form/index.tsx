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
import AppTextarea from '@/components/common/@form/app-textarea'
import CurrencyInput, { formatValue } from 'react-currency-input-field'

interface ILPContactFormProps {
    onSubmit: (model: IContactUserData) => void
}

const LPContactForm: React.FC<ILPContactFormProps> = props => {
    const { onSubmit } = props
    const { isMobile } = useWindowSize()

    const imageURL = !isMobile
        ? landingPage.AvatarContactModal
        : landingPage.AvatarContactModalMobile

    const moneyMask = useMask('money')
    const phoneNumberMask = useMask('phoneNumber')

    const {
        register,
        setValue,
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

                <Styles.FieldContainer>
                    <Styles.Text className="text-center mb-8">
                        Deixa eu entender um pouco melhor sobre o seu projeto e
                        discutir como podemos dar vida a sua visão por meio de
                        processos testados e aprovados de desenvolvimento?
                    </Styles.Text>
                    <Styles.Text>Seus dados*</Styles.Text>
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
                    <Styles.Text>Entendendo seu negócio</Styles.Text>
                    <AppTextarea
                        id="resume"
                        rows={4}
                        register={register}
                        error={errors.resume}
                        placeholder="Por favor, me fale um pouco sobre o seu projeto e me ajude a entender como posso ajudar a colocar em prática"
                    />
                    <Styles.Text className="mb-2">
                        Qual a sua expectativa de investimento?
                    </Styles.Text>

                    <CurrencyInput
                        name="value"
                        prefix="R$ "
                        decimalsLimit={2}
                        placeholder="R$ 0000"
                        className="form-control mb-4"
                        onValueChange={value => {
                            const result = formatValue({
                                prefix: 'R$ ',
                                value: value || '',
                                groupSeparator: '.',
                                decimalSeparator: ','
                            })

                            setValue('value', String(result))
                        }}
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
