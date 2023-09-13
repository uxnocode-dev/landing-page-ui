import { IContactUserData } from '@/interfaces/contact.interface'

export const getBudgetWhatsappTemplate = (user: IContactUserData) => {
    return `
*Olá uxnocode, essa é a minha proposta comercial*
%0a
%0a
*Nome:* ${user.name}%0a
*Telefone:* ${user.telephone}%0a
*email:* ${user.email}
%0a
%0a
*Negócio:* ${user.resume}%0a
*Valor:* ${user.value}%0a
%0a
`
}
