import * as yup from 'yup'

export const contactUserDataSchema = yup.object().shape({
    value: yup.string(),
    resume: yup.string(),
    name: yup.string().required('Insira seu nome'),
    email: yup.string().required('Insira seu email'),
    telephone: yup
        .string()
        .required('Insira seu telefone')
        .min(15, 'Insira um telefone valido')
})
