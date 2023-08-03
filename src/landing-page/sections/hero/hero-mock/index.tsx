import React from 'react'
import Styles from './styles'
import landingPage from '@/assets/landing-page'

interface IHeroMockProps {
    className?: string
}
const HeroMock: React.FC<IHeroMockProps> = props => {
    const { className } = props

    return (
        <Styles.Container className={className}>
            <Styles.Shadow />
            <Styles.ImageMock src={landingPage.HeroMock} />
        </Styles.Container>
    )
}

export default HeroMock
