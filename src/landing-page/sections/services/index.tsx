import React from 'react'
import Styles from './styles'
import Icons from '@/assets/icons'
import { useWindowSize } from '@/hooks/window-size.hook'
import LPSectionTitle from '@/landing-page/components/section-title'
import AppButton from '@/components/common/@button/app-button'

const LPServices: React.FC = () => {
    const { isMobile } = useWindowSize()

    const items = [
        {
            icon: <Icons.SearchLg />,
            title: 'Descoberta',
            topics: [
                'Pesquisas online',
                'Pesquisas de concorrentes',
                'Entendimento do negócio',
                'Definição de persona',
                'Definição da jornada do usuário',
                'Entendimento e priorização de funcionalidades'
            ]
        },
        {
            icon: <Icons.Pen />,
            title: 'Design',
            topics: [
                'Criação de identidade visual e marca',
                'Criação do protótipo de telas',
                'Definição do fluxo de navegação',
                'Definição do guia de estilos',
                'Cuidados com a experiência dos usuários'
            ]
        },
        {
            icon: <Icons.CodeBrowser />,
            title: 'Construção',
            topics: [
                'Entendimento das histórias',
                'Arquitetura do projeto',
                'Modularização',
                'Integração via APIs',
                'Modelagem de banco de dados'
            ]
        },
        {
            icon: <Icons.EyeOpen />,
            title: 'Testes/entrega',
            topics: [
                'Testes de usabilidade com os usuários',
                'Design review',
                'Testes de estresse do sistema',
                'Entrega da documentação do projeto',
                'Entrega da aplicação online'
            ]
        },
        {
            icon: <Icons.PackageCheck />,
            title: 'Suporte',
            topics: [
                'Garantia dos serviços',
                'Correção de bugs',
                'Acompanhamento da equipe de pós-venda',
                'Suporte estendido de acordo com a sua necessidade'
            ]
        }
    ]

    return (
        <Styles.ContainerWrapper>
            <Styles.Container>
                <LPSectionTitle
                    shadowMode="secondary"
                    title="Nossos serviços"
                />

                <Styles.Text className="my-5 text-center">
                    Esse é o jeito uxnocode de ajudar você a desenvolver um
                    software de sucesso!
                </Styles.Text>

                <Styles.HandIcon>
                    <Icons.ScrollXIndicator />
                </Styles.HandIcon>

                <Styles.Content>
                    {items.map((item, index) => (
                        <Styles.Card
                            key={index}
                            className={isMobile ? 'mobile' : ''}
                        >
                            <Styles.Icon>{item.icon}</Styles.Icon>
                            <Styles.Title>{item.title}</Styles.Title>
                            <Styles.TopcsContainer>
                                {item.topics.map((topic, topicI) => (
                                    <Styles.Topic key={topicI}>
                                        {topic}
                                    </Styles.Topic>
                                ))}
                            </Styles.TopcsContainer>
                        </Styles.Card>
                    ))}
                </Styles.Content>

                <AppButton className="sm:mb-5">Eu quero</AppButton>
            </Styles.Container>
        </Styles.ContainerWrapper>
    )
}

export default LPServices
