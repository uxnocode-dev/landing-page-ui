import React from 'react'
import Styles from './styles'
import { FaLinkedin } from 'react-icons/fa'
import { useWindowSize } from '@/hooks/window-size.hook'
import { TEAM_DATA } from '@/landing-page/data/team.data'
import CarouselLoop from '@/components/common/carousel-loop'
import LPSectionTitle from '@/landing-page/components/section-title'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

const LPTeam: React.FC = () => {
    const { isMobile } = useWindowSize()
    const slidesPerView = isMobile ? 2 : 6

    const goToLinkedin = (url: string) => {
        if (url) window.open(url, '_blank')
    }

    return (
        <Styles.ContainerWrapper id={LANDING_PAGE_NAVIGATION.team}>
            <Styles.Container>
                <LPSectionTitle
                    shadowMode="secondary"
                    title="Quem faz acontecer"
                />

                <Styles.Content>
                    <CarouselLoop stopOnHover slidesPerView={slidesPerView}>
                        {TEAM_DATA.map((item, index) => (
                            <Styles.Card
                                key={index}
                                onClick={() => goToLinkedin(item.linkedinURL)}
                            >
                                <Styles.CardImageContainer>
                                    <Styles.Image src={item.image} />

                                    {!!item.linkedinURL && (
                                        <Styles.LinkedinLink
                                            target="_blank"
                                            href={item.linkedinURL}
                                        >
                                            <FaLinkedin />
                                        </Styles.LinkedinLink>
                                    )}
                                </Styles.CardImageContainer>

                                <Styles.Title>{item.name}</Styles.Title>
                                <Styles.CardText>{item.role}</Styles.CardText>
                                <Styles.CardTextAbbr>
                                    {item.abbreviation}
                                </Styles.CardTextAbbr>
                            </Styles.Card>
                        ))}
                    </CarouselLoop>
                </Styles.Content>
            </Styles.Container>
        </Styles.ContainerWrapper>
    )
}

export default LPTeam
