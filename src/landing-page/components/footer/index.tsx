import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import LPSocialMedia from '../social-media'
import { scrollTo } from '@/functions/scroll-to.function'
import { SOCIAL_MEDIA } from '@/contants/social-media.constant'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

interface ILPFooterProps {
    openModal: Function
    openModalContact: Function
}

const LPFooter: React.FC<ILPFooterProps> = props => {
    const { openModal, openModalContact } = props
    const openURL = (url: string) => window.open(url, '_blank')

    const columns = [
        {
            title: `Mapa do site`,
            items: [
                {
                    title: `Topo do site`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.top)
                },
                {
                    title: `Diferenciais`,
                    action: () =>
                        scrollTo(LANDING_PAGE_NAVIGATION.differentials)
                },
                {
                    title: `Projetos`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.cases)
                },
                {
                    title: `Desenvolvimento`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.development)
                },
                {
                    title: `Depoimentos`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.testimony)
                },
                {
                    title: `FAQs`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.faq)
                },
                {
                    title: `Time`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.team)
                },
                { title: `Carreira`, action: () => openModal() }
            ].filter(({ title }) => {
                const hideMobile = ['Diferenciais']
                return hideMobile.some(item => item !== title)
            })
        },
        {
            title: `Institucional`,
            items: [
                {
                    title: `Sobre nós`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.about)
                },
                { title: `Carreira`, action: () => openModal() },
                {
                    title: `Contato`,
                    action: () => openModalContact()
                }
            ]
        },
        {
            title: `Recursos`,
            items: [
                {
                    title: `FAQs`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.faq)
                }
            ]
        },
        {
            title: `Social`,
            items: SOCIAL_MEDIA.map(item => ({
                title: item.title,
                action: () => openURL(item.link)
            }))
        }
    ]

    const itemsContainerStyle: React.CSSProperties = {
        gridTemplateColumns: `repeat(${columns.length}, 1fr)`
    }

    return (
        <>
            <Styles.Section>
                <Styles.Container>
                    <Styles.View>
                        <Styles.Image src={images.Logo} />
                        <Styles.Text className="sm:text-center">
                            Pessoas incríveis com processos e visão clara,
                            constroem produtos sensacionais!
                        </Styles.Text>
                    </Styles.View>

                    <Styles.ItemsContainer style={itemsContainerStyle}>
                        {columns.map((col, index) => (
                            <Styles.Item key={index}>
                                <Styles.Title className="mb-2">
                                    {col.title}
                                </Styles.Title>

                                {col.items.map((item, itemIndex) => (
                                    <Styles.TextBold
                                        key={itemIndex}
                                        onClick={item.action}
                                    >
                                        {item.title}
                                    </Styles.TextBold>
                                ))}
                            </Styles.Item>
                        ))}
                    </Styles.ItemsContainer>
                </Styles.Container>
            </Styles.Section>

            <Styles.Footer>
                <Styles.Text className="mr-auto sm:text-center sm:text-sm sm:mb-4">
                    ® 2023 uxnocode.com | CNPJ: 46.132.525/0001-81 - Todos os
                    direitos reservados.
                </Styles.Text>

                <LPSocialMedia />
            </Styles.Footer>
        </>
    )
}

export default LPFooter
