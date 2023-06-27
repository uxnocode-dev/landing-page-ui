import React from 'react'
import Styles from './styles'
import landingPage from '@/assets/landing-page'
import CarouselLoop from '@/components/common/carousel-loop'

const LPTechnologies: React.FC = () => {
    const items = [
        { title: `AWS`, url: landingPage.technologies.AWS },
        { title: `Bubble`, url: landingPage.technologies.Bubble },
        { title: `Flutter Flow`, url: landingPage.technologies.FlutterFlow },
        { title: `Jira`, url: landingPage.technologies.Jira },
        { title: `React`, url: landingPage.technologies.React }
    ]

    return (
        <Styles.ContainerWrapper>
            <Styles.Container>
                <Styles.Text>
                    E para construir bem, usamos as melhores ferramentas do
                    mercado!
                </Styles.Text>

                <Styles.Content>
                    <CarouselLoop stopOnHover>
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
