import React from 'react'
import Styles from './styles'
import landingPage from '@/assets/landing-page'
import CarouselLoop from '@/components/common/carousel-loop'

const LPTechnologies: React.FC = () => {
    const items = [
        { title: `AWS`, url: landingPage.technologies.AWS },
        { title: `Bubble`, url: landingPage.technologies.Bubble },
        { title: `Figma`, url: landingPage.technologies.Figma },
        { title: `Flutter Flow`, url: landingPage.technologies.FlutterFlow },
        { title: `Firebase`, url: landingPage.technologies.Firebase },
        { title: `Jira`, url: landingPage.technologies.Jira },
        { title: `React`, url: landingPage.technologies.React },
        { title: `Angular`, url: landingPage.technologies.Angular },
        { title: `Vue`, url: landingPage.technologies.Vue }
    ]

    return (
        <Styles.ContainerWrapper>
            <Styles.Container>
                <Styles.Text>
                    E para construir bem, usamos as melhores ferramentas do
                    mercado!
                </Styles.Text>

                <Styles.Content>
                    <CarouselLoop slidesPerView={6} stopOnHover speed={4000}>
                        {items.map((item, index) => (
                            <Styles.Image
                                key={index}
                                src={item.url}
                                title={item.title}
                            />
                        ))}
                    </CarouselLoop>
                </Styles.Content>
            </Styles.Container>
        </Styles.ContainerWrapper>
    )
}

export default LPTechnologies
