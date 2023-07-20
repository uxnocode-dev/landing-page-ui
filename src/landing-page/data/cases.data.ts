import landingPage from '@/assets/landing-page'
import { ICaseItemLP } from '@/interfaces/case.interface'

export const CASES_DATA: ICaseItemLP[] = [
    {
        title: `Bora Planejar`,
        image: landingPage.cases.BoraPlanejar,
        authorImage: landingPage.cases.AuthorDefault,
        authorName: `Marcos`,
        testimony: `Recentemente, contratei a uxnocode para um serviço de ui/ux de algumas páginas da nossa plataforma. A equipe foi profissional, entregando um trabalho de alta qualidade dentro do prazo estipulado. A comunicação foi cordial e eficiente e eles entenderam perfeitamente minhas necessidades sempre abertos ao feedback. Em resumo, foi uma ótima experiência.`,
        description: `Sistema organizacional`
    },
    {
        title: `Organic lead`,
        image: landingPage.cases.Organic,
        authorImage: landingPage.cases.AuthorOrganic,
        authorName: `Juliana Dantas`,
        testimony: `Minha experiência na uxnocode tem sido maravilhosa! Cheguei com uma única certeza: queria uma logo. E, de cara, recebi mais do que um atendimento. Uma imersão em mercado, marca, identidade visual, conteúdo e comunicação inteligente. Ser orientada por profissionais que se importam de verdade com   o sucesso e saúde do meu projeto tem feito a diferença na minha vida e nos meus negócios.`,
        description: `Captação de leads orgânicos`
    },
    {
        title: `Tradefy`,
        description: `Plataforma trader`,
        image: landingPage.cases.Tradefy,
        authorImage: landingPage.cases.AuthorDefault,
        authorName: ``,
        testimony: ``
    },
    {
        title: `Smarttec`,
        image: landingPage.cases.SmartTec,
        authorImage: landingPage.cases.SmartTec,
        authorName: ``,
        testimony: ``,
        description: `Sistema de câmeras com IA`
    }
]
