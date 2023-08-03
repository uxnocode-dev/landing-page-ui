import React from 'react'
import Styles from './styles'
import landingPage from '@/assets/landing-page'
import images from '@/assets/images'

interface IAboutTeamProps {
    className?: string
}

const AboutTeam: React.FC<IAboutTeamProps> = props => {
    const { className } = props

    const items = [
        { title: `Pedro`, image: landingPage.team.PedroSilva },
        { title: `Davi`, image: landingPage.team.DaviMendes },
        { title: `José Thiago`, image: landingPage.team.ThiagoAraujo },
        { title: `Andrei`, image: landingPage.team.AndreiCasagrande }
    ]

    return (
        <Styles.Container className={className}>
            <Styles.Background />

            <Styles.LogoContainer>
                <Styles.CenterImage src={images.LogoMascot} />
            </Styles.LogoContainer>

            <Styles.Content>
                {items.map((item, index) => (
                    <Styles.Card key={index}>
                        <Styles.Image src={item.image} />
                        <Styles.Title>{item.title}</Styles.Title>
                    </Styles.Card>
                ))}
            </Styles.Content>
        </Styles.Container>
    )
}

export default AboutTeam
