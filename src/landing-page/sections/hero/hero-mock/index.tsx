import React from 'react'
import Styles from './styles'
import landingPage from '@/assets/landing-page'
import { useWindowSize } from '@/hooks/window-size.hook'

interface IHeroMockProps {
    className?: string
}
const HeroMock: React.FC<IHeroMockProps> = props => {
    const { className } = props
    const { isMobile } = useWindowSize()

    return (
        <Styles.Container
            className={`${className} animate__animated animate__fadeIn animate__delay-2s`}
        >
            <Styles.Shadow isMobile={isMobile} />
            <Styles.Image src={landingPage.HeroMock} />
        </Styles.Container>
    )
}

export default HeroMock
