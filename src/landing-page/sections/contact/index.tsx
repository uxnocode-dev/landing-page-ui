import React from 'react'
import Styles from './styles'
import landingPage from '@/assets/landing-page'
import AppButton from '@/components/common/@button/app-button'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

interface IContactProps {
    openModal: Function
}
const LPContact: React.FC<IContactProps> = props => {
    const { openModal } = props
    return (
        <Styles.ContainerWrapper id={LANDING_PAGE_NAVIGATION.contact}>
            <Styles.Container>
                <Styles.Content>
                    <Styles.Title>Contato</Styles.Title>
                    <Styles.Text>
                        Agora que você já conhece um pouco mais sobre nós, que
                        tal marcar um papo sobre o seu projeto com um
                        especialista?!
                    </Styles.Text>
                    <AppButton colorMode="white" onClick={() => openModal()}>
                        Falar com especialista
                    </AppButton>
                </Styles.Content>
                <Styles.Image src={landingPage.AvatarContact} />
            </Styles.Container>
        </Styles.ContainerWrapper>
    )
}

export default LPContact
