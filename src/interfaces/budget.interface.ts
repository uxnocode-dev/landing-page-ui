export interface IBudgetQuestion {
    order: number
    title: string
    options: string[]
}

export interface IBudgetSection {
    title: string
    order: number
    description: string
    question: IBudgetQuestion
}
