import landingPage from '@/assets/landing-page'
import { AiOutlineEye } from 'react-icons/ai'
import { BiCodeBlock } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { BsBox } from 'react-icons/bs'

export const DEVELOPMENT_DATA = [
    {
        icon: <FiSearch />,
        title: `Descobertas`,
        image: landingPage.development.Discovery,
        description: `Entender as dores tanto do mercado quanto do negócio é o primeiro passo para construir um aplicativo que o cliente goste de verdade de usar!`,
        items: [
            `Pesquisas e validações`,
            `Discovery completo e exclusivo`,
            `Entendimento do negócio`,
            `Jornada do usuário no app`,
            `Entendimento das funcionalidades`,
            `Documentação do projeto`
        ]
    },
    {
        icon: <BiCodeBlock />,
        title: `Construção`,
        image: landingPage.development.Construction,
        description: `Construir com bases fortes garante que o aplicativo possa ter desde 1000 usuários até 100.000+ simultâneamente!`,
        items: [
            `Entendimento do discovery`,
            `Arquitetura do projeto`,
            `Modularização`,
            `Integração via APIs`,
            `Modelagem de banco de dados`
        ]
    },
    {
        icon: <AiOutlineEye />,
        title: `Testes e entrega`,
        image: landingPage.development.DeliveryTest,
        description: `No teste de usabilidade ouvimos usuários reais. Na uxnocode você vai receber toda a documentação do projeto no final!`,
        items: [
            `Design review`,
            `Testes de usabilidade`,
            `Testes de estresse do sistema`,
            `Code review`,
            `Entrega da documentação`,
            `Postagem nas lojas de apps`
        ]
    },
    {
        icon: <BsBox />,
        title: `Suporte e sustentação`,
        image: landingPage.development.Support,
        description: `Você precisa de um suporte estendido para não ter dor de cabeça com nada? Fique tranquilo(a) os primeiros 30 dias são por nossa conta!`,
        items: [
            `Garantia dos serviços`,
            `Correção de qualquer bug`,
            `Gerente pós-vendas dedicado`,
            `Mesma atenção do desenvolvimento`,
            `Suporte estendido`
        ]
    }
]
