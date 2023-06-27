import React from 'react'
import Styles from './styles'
import { useWindowSize } from '@/hooks/window-size.hook'
import { TEAM_DATA } from '@/landing-page/data/team.data'
import CarouselLoop from '@/components/common/carousel-loop'
import LPSectionTitle from '@/landing-page/components/section-title'

const LPTeam: React.FC = () => {
    const { isMobile } = useWindowSize()
    const slidesPerView = isMobile ? 2 : 4

    return (
        <Styles.ContainerWrapper>
            <Styles.Container>
                <LPSectionTitle
                    shadowMode="secondary"
                    title="Quem faz acontecer"
                />

                <Styles.Content>
                    <CarouselLoop stopOnHover slidesPerView={slidesPerView}>
                        {TEAM_DATA.map((item, index) => (
                            <Styles.Card key={index}>
                                <Styles.Image src={item.image} />
                                <Styles.Title>{item.name}</Styles.Title>
                                <Styles.CardText>{item.role}</Styles.CardText>
                            </Styles.Card>
                        ))}
                    </CarouselLoop>
                </Styles.Content>
            </Styles.Container>
        </Styles.ContainerWrapper>
    )
}

export default LPTeam
