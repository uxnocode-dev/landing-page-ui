import { IContactUserData } from '@/interfaces/contact.interface'
import { IBudgetSectionAnswer } from '@/landing-page/components/budget/budget-section'

export const getBudgetTemplate = (
    user: IContactUserData,
    answers: IBudgetSectionAnswer[]
) => {
    return `OPA ${user.email}`
}
