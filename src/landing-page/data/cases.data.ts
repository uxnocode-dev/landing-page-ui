import landingPage from '@/assets/landing-page'
import { ICaseItemLP } from '@/interfaces/case.interface'

export const CASES_DATA: ICaseItemLP[] = [
    {
        title: `Organic lead`,
        image: landingPage.cases.Organic,
        authorImage: landingPage.cases.AuthorOrganic,
        authorName: `Juliana Dantas`,
        authorRole: `Fundadora da plataforma Organic Lead`,
        testimony: `Minha experiência na uxnocode tem sido maravilhosa! Cheguei com uma única certeza: queria uma logo. E, de cara, recebi mais do que um atendimento. Uma imersão em mercado, marca, identidade visual, conteúdo e comunicação inteligente. Ser orientada por profissionais que se importam de verdade com  o sucesso e saúde do meu projeto tem feito a diferença na minha vida e nos meus negócios.`,
        testimonyLabel: `Ser orientada por profissionais que se importam de verdade com o sucesso do projeto`,
        description: `Captação de leads orgânicos`
    },
    {
        title: `Tradefy`,
        description: `Plataforma trader`,
        image: landingPage.cases.Tradefy,
        authorImage: landingPage.cases.AuthorTradefy,
        authorName: `Arthur H.`,
        authorRole: `Criador Tradefy`,
        testimony: `Quero deixar meu depoimento sincero para o serviço da uxnocode que foi sensacional, prestou todo suporte com reuniões desde o começo, atendendo o serviço de maneira excepcional do começo ao fim, não é a primeira vez que eu trabalho com eles e nem a última, recomendo a qualquer um que busque um serviço diferenciado e bem feito pro seu projeto`,
        testimonyLabel: `Não é a primeira vez que eu trabalho com eles e nem a última.`
    },
    {
        title: `Jusprod`,
        image: landingPage.cases.Jusprod,
        authorImage: landingPage.cases.AuthorBoraPlanejar,
        authorName: `Marcos`,
        authorRole: `CEO Jusprod`,
        description: ``,
        testimony: ``,
        testimonyLabel: ``
    },
    {
        title: `Smarttec`,
        image: landingPage.cases.SmartTec,
        authorImage: landingPage.cases.SmartTec,
        authorName: ``,
        authorRole: ``,
        testimony: ``,
        description: `Sistema de câmeras com IA`,
        testimonyLabel: ``
    },
    {
        title: `Bora Planejar`,
        image: landingPage.cases.BoraPlanejar,
        authorImage: landingPage.cases.AuthorBoraPlanejar,
        authorName: `Marcos`,
        authorRole: `CEO BoraPlanejar`,
        description: `Sistema organizacional`,
        testimony: `Recentemente, contratei a uxnocode para um serviço de ui/ux de algumas páginas da nossa plataforma. A equipe foi profissional, entregando um trabalho de alta qualidade dentro do prazo estipulado. A comunicação foi cordial e eficiente e eles entenderam perfeitamente minhas necessidades sempre abertos ao feedback. Em resumo, foi uma ótima experiência.`,
        testimonyLabel: `A comunicação foi cordial e eficiente e eles entenderam perfeitamente as expectativas`
    }
]
