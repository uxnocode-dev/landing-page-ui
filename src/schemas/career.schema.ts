import * as yup from 'yup'

export const careerFormSchema = yup.object().shape({
    name: yup.string().required('Insira seu nome'),
    email: yup.string().required('Insira seu email'),
    role: yup.string().required('Selecione uma opção'),
    portfolioURL: yup.string().required('Insira o link do portifólio')
})
