import React from 'react'
import Styles from './styles'
import { useForm } from 'react-hook-form'
import AppInput from '../common/@form/app-input'
import { yupResolver } from '@hookform/resolvers/yup'
import AppInputPassword from '../common/@form/app-input-password'

// #region: schema
import * as yup from 'yup'
import { AuthenticationService } from '@/firebase/services/authentication.service'
import { AlertService } from '@/services/common/alert.service'

export const exempleFormSchema = yup.object().shape({
    email: yup.string().required('Insira o e-mail'),
    password: yup.string().required('Insira uma senha')
})
// #endregion: schema

// #region: interface
interface IExempleForm {
    email: string
    password: string
}
// #endregion: interface

const alertService = new AlertService()
const authenticationService = new AuthenticationService()

const LoginForm: React.FC = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<IExempleForm>({
        mode: 'onChange',
        resolver: yupResolver(exempleFormSchema)
    })

    const onSubmit = handleSubmit(async (model: IExempleForm) => {
        try {
            const response = await authenticationService.login(model)
            reset()
            console.log('RESPONSE :', response)
        } catch (error) {
            alertService.responseError(error)
        }
    })

    return (
        <Styles.Form onSubmit={onSubmit}>
            <AppInput
                id="email"
                label="E-mail"
                register={register}
                error={errors.email}
            />
            <AppInputPassword
                id="password"
                label="Senha"
                register={register}
                error={errors.password}
            />

            <Styles.Button type="submit" disabled={!isValid}>
                Submit
                {isValid}
            </Styles.Button>
        </Styles.Form>
    )
}

export default LoginForm
