import * as yup from 'yup'

export const careerFormSchema = yup.object().shape({
    name: yup.string().required('Insira seu nome'),
    email: yup.string().required('Insira seu email'),
    portfolioURL: yup.string().required('Insira o link do portifólio')
})
