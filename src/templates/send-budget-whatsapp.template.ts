import { IContactUserData } from '@/interfaces/contact.interface'
import { IBudgetSectionAnswer } from '@/landing-page/components/budget/budget-section'

export const getBudgetWhatsappTemplate = (
    user: IContactUserData,
    answers: IBudgetSectionAnswer[]
) => {
    return `
*Olá uxnocode, essa é a minha proposta comercial*
%0a
%0a
*Nome:* ${user.name}%0a
*Telefone:* ${user.telephone}%0a
*email:* ${user.email}%0a
%0a
${answers.map(item => `*${item.question}*%0a${item.answer}%0a %0a`).join('')}`
}
