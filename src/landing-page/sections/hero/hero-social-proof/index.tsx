import React from 'react'
import Styles from './styles'
import { BiWinkSmile } from 'react-icons/bi'
import landingPage from '@/assets/landing-page'
import { useWindowSize } from '@/hooks/window-size.hook'

const HeroSocialProof: React.FC = () => {
    const { isMobile } = useWindowSize()
    const text = !isMobile
        ? `Dispositivos móveis ativos no Brasil.\nIsso mesmo, nosso país tem mais celulares do que habitantes,\n e todos eles estão esperando o seu aplicativo chegar!`
        : `Dispositivos móveis ativos no Brasil.\nIsso mesmo, nosso país tem mais\ncelulares do que habitantes,\n e todos eles estão esperando\no seu aplicativo chegar!`

    return (
        <Styles.Container>
            <Styles.ClientContainer>
                <Styles.ClientBadge>
                    <BiWinkSmile />
                    Clientes
                </Styles.ClientBadge>
                <Styles.ClientTitle>251,6 milhões</Styles.ClientTitle>
                <Styles.ClientText>{text}</Styles.ClientText>
                <Styles.ClientImage src={landingPage.HeroClient} />
            </Styles.ClientContainer>

            <Styles.MarketContainer>
                <Styles.MarketImage src={landingPage.HeroPig} />
                <Styles.MarketContent>
                    <Styles.MarketBadge>
                        O mercado só cresce!
                    </Styles.MarketBadge>
                    <Styles.MarketTitle>R$ 30 bilhões</Styles.MarketTitle>
                    <Styles.MarketText>
                        Esse é o valor gerado por aplicativos entre 2022 e 2023
                        no Brasil
                    </Styles.MarketText>
                </Styles.MarketContent>
            </Styles.MarketContainer>
        </Styles.Container>
    )
}

export default HeroSocialProof
