import React from 'react'
import Styles from './styles'
import AboutTeam from './about-team'
import AppButton from '@/components/common/@button/app-button'
import LPSectionTitle from '@/landing-page/components/section-title'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

interface IAboutProps {
    openModal: Function
}
const LPAbout: React.FC<IAboutProps> = ({ openModal }) => {
    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.about}>
            <LPSectionTitle title="Sobre nós" />

            <Styles.Content>
                <AboutTeam className="h-full" />

                <Styles.View>
                    <Styles.Title>uxnocode</Styles.Title>
                    <Styles.Text>
                        Nós somos uma agência fundada por 3 sócios que são
                        apaixonados pelo que fazem e tem uma baita experiência
                        no desenvolvimento de softwares.
                    </Styles.Text>

                    <Styles.Text>
                        <Styles.HighlightText>
                            Juntos temos mais de 20 anos de experiência
                        </Styles.HighlightText>
                        no gerenciamento de equipes e desenvolvimento de
                        sistemas.
                    </Styles.Text>

                    <Styles.Text>
                        Trabalhamos em projetos de empresas como
                        <Styles.HighlightText>
                            Unimed, Itaú, Gol, Mercado Livre,
                        </Styles.HighlightText>
                        grandes bancos e muito mais!
                    </Styles.Text>

                    <Styles.Text>
                        Percebemos que as agências pensam apenas em vender um
                        app e lucrar, mas não pensam na escalabilidade e no que
                        você realmente precisa!
                    </Styles.Text>

                    <Styles.Text>
                        <Styles.ColoredText>
                            Decidimos fazer diferente!!
                        </Styles.ColoredText>
                    </Styles.Text>

                    <AppButton loopEffect onClick={() => openModal()}>
                        Quero falar com vocês
                    </AppButton>
                </Styles.View>
            </Styles.Content>
        </Styles.Container>
    )
}

export default LPAbout
