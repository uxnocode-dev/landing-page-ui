import Styles from './styles'
import landingPage from '@/assets/landing-page'
import React, { useEffect, useState } from 'react'
import { scrollTo } from '@/functions/scroll-to.function'
import AppButton from '@/components/common/@button/app-button'
import TypingText from '@/landing-page/components/typing-text'
import LPSocialMedia from '@/landing-page/components/social-media'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

const LPHero: React.FC = () => {
    const titles = [
        {
            highlights: ['jornada', 'ajudar nessa escalada!'],
            text: `A construção de um software é uma jornada, e \nnós estamos aqui para ajudar nessa escalada!`
        },
        {
            highlights: ['tempo', 'dinheiro'],
            text: `Quanto tempo e dinheiro você quer investir\nem um projeto sem planejamento?`
        },
        {
            highlights: ['descobrir'],
            text: `Nós vamos te ajudar a descobrir o que realmente\no seu cliente precisa e é valioso para o negócio!`
        },
        {
            highlights: ['economizar 6', 'meses', 'e muito dinheiro!'],
            text: `15 dias de descobertas podem economizar 6\n meses de desenvolvimento e muito dinheiro!`
        },
        {
            highlights: ['entender'],
            text: `Clique em “quero saber mais” que nós vamos\nentrar em contato para entender o seu projeto!`
        }
    ]

    const [isLastTitle, setIsLastTitle] = useState(false)
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
    const currentTitle = titles[currentTitleIndex] || titles[0]

    const goToContact = () => scrollTo(LANDING_PAGE_NAVIGATION.contact)

    useEffect(() => {
        if (isLastTitle) setCurrentTitleIndex(0)
    }, [isLastTitle])

    useEffect(() => {
        setIsLastTitle(currentTitleIndex === titles.length - 1)
    }, [currentTitleIndex])

    useEffect(() => {
        const interval = setInterval(
            () => setCurrentTitleIndex(prev => prev + 1),
            6000
        )

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <Styles.ContainerWrapper
            bgImage={landingPage.HeroBG}
            id={LANDING_PAGE_NAVIGATION.top}
        >
            <Styles.Container>
                <LPSocialMedia
                    direction="column"
                    className="pr-4 absolute right-12 top-10 sm:static sm:mb-8"
                />

                <TypingText
                    text={currentTitle.text}
                    highlights={currentTitle.highlights}
                    className="min-h-[134px] font-bold text-center text-[2.75rem] mb-8 sm:text-[1.2rem] sm:block"
                />

                <Styles.Text>
                    {`Milhares de reais são gastos todos os dias no desenvolvimento de aplicativos, mas sem o planejamento e\nprocesso adequados isso pode se transformar em uma enorme dor de cabeça.`}
                </Styles.Text>

                <Styles.Text>
                    {`Você sabia que pode economizar tempo e muito dinheiro apenas\ntendo a visão correta daquilo que você quer desenvolver?`}
                </Styles.Text>

                <Styles.Text>
                    {`Nós estamos juntos nessa jornada! Temos todas as ferramentas\npara facilitar o seu caminho rumo a um site, sistema ou aplicativo de`}
                    <Styles.ColoredText> sucesso!</Styles.ColoredText>
                </Styles.Text>

                <AppButton className="mt-8" onClick={goToContact}>
                    Quero saber mais
                </AppButton>
            </Styles.Container>
        </Styles.ContainerWrapper>
    )
}

export default LPHero
