import { IBudgetQuestion, IBudgetSection } from '@/interfaces/budget.interface'

export const BUDGET_QUESTION_DATA: IBudgetQuestion[] = [
    {
        order: 1,
        title: `Escolha a opção que melhor representa a sua necessidade`,
        options: [
            `Quero desenvolver um novo site/aplicativo.`,
            `Quero uma apresentação para buscar investidores.`,
            `Já tenho um site/aplicativo e quero melhorar a experiência para aumentar minhas vendas.`
        ]
    },
    {
        order: 2,
        title: `Em qual fase seu projeto está?`,
        options: [
            `Tenho uma ideia mas não sei exatamente como colocar em prática.`,
            `Tenho uma ideia e já organizei pesquisas e registros de descobertas.`,
            `Já tenho um site/aplicativo no ar e quero melhorar.`
        ]
    },
    {
        order: 3,
        title: `Em quanto tempo você precisa do projeto pronto?`,
        options: [`2 meses`, `4 meses`, `6 meses ou mais`]
    },
    {
        order: 4,
        title: `Quando você quer começar  o desenvolvimento?`,
        options: [
            `O mais rápido possível`,
            `1 a 2 semanas`,
            `Ainda não tenho certeza`
        ]
    },
    {
        order: 5,
        title: `Quem irá tomar as decisões nesse projeto?`,
        options: [`Somente eu`, `Tenho sócios`]
    }
]

export const BUDGET_SECTION_DATA: IBudgetSection[] = [
    {
        order: 1,
        title: `Muito obrigado pelo seu interesse em realizar o seu projeto com a gente!`,
        description: `Para tornar o nosso primeiro papo mais eficiente e produtivo, por favor responda essas 5 perguntas rápidas.`,
        question: BUDGET_QUESTION_DATA[0]
    },
    {
        order: 2,
        title: `Queremos entender o quanto sua ideia está madura.`,
        description: `Isso vai ser importante para os nossos especialistas elaborarem o cronograma de desenvolvimento.`,
        question: BUDGET_QUESTION_DATA[1]
    },
    {
        order: 3,
        title: `Vamos entender qual a urgência do projeto?!`,
        description: `Nós vamos nos preparar para desenvolver de acordo com a sua necessidade.`,
        question: BUDGET_QUESTION_DATA[2]
    },
    {
        order: 4,
        title: `Não se preocupe, isso não é um acordo ainda, é somente uma estimativa.`,
        description: `Vai depender de toda negociação e vamos fazer respeitando o seu tempo, mas em quanto tempo depois da nossa ultima reunião você pretende começar a trabalhar sua ideia?`,
        question: BUDGET_QUESTION_DATA[3]
    },
    {
        order: 5,
        title: `Obrigado por chegar até aqui! Essa é a última pergunta.`,
        description: `Por favor, nos ajude a entender o porte do projeto e quantas pessoas estarão envolvidas nas decisões.`,
        question: BUDGET_QUESTION_DATA[4]
    }
]
