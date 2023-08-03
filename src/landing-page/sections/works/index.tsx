import React from 'react'
import Styles from './styles'
import landingPage from '@/assets/landing-page'
import { useWindowSize } from '@/hooks/window-size.hook'
import LPSectionTitle from '@/landing-page/components/section-title'

const LPWorks: React.FC = () => {
    const { isMobile } = useWindowSize()
    const imageURL = isMobile ? landingPage.WorksBGMobile : landingPage.WorksBG

    return (
        <Styles.ContainerWrapper>
            <LPSectionTitle title="Alguns trabalhos" />

            <Styles.BackgroundWrapper>
                <Styles.Container>
                    <Styles.Image src={imageURL} />
                </Styles.Container>
            </Styles.BackgroundWrapper>
        </Styles.ContainerWrapper>
    )
}

export default LPWorks
