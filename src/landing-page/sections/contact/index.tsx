import React from 'react'
import Styles from './styles'
import landingPage from '@/assets/landing-page'
import { useWindowSize } from '@/hooks/window-size.hook'
import AppButton from '@/components/common/@button/app-button'

interface IContactProps {
    openModal: Function
}
const LPContact: React.FC<IContactProps> = props => {
    const { openModal } = props
    const { isMobile } = useWindowSize()

    return (
        <Styles.ContainerWrapper>
            <Styles.Container>
                <Styles.Content>
                    <Styles.Title>Contato</Styles.Title>
                    <Styles.Text>
                        Agora que você já conhece um pouco mais sobre nós, que
                        tal marcar um papo sobre o seu projeto com um
                        especialista?!
                    </Styles.Text>
                    <AppButton
                        loopEffect
                        onClick={() => openModal()}
                        colorMode={isMobile ? 'primary' : 'white'}
                    >
                        Falar com especialista
                    </AppButton>

                    <Styles.Small>
                        Nós vamos responder esse contato no máximo em 1 hora.
                    </Styles.Small>
                </Styles.Content>
                <Styles.Image src={landingPage.AvatarContact} />
            </Styles.Container>
        </Styles.ContainerWrapper>
    )
}

export default LPContact
