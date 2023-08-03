import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import landingPage from '@/assets/landing-page'
import { useWindowSize } from '@/hooks/window-size.hook'

const LPContactSuccess: React.FC = () => {
    const { isMobile } = useWindowSize()

    const avatarIMG = !isMobile
        ? landingPage.AvatarContact
        : landingPage.AvatarContact

    return (
        <Styles.Container>
            <Styles.Image src={avatarIMG} />

            <Styles.Section>
                <Styles.ImageLogo src={images.Logo} />
                <Styles.ImageSuccess src={landingPage.ContactSuccess} />

                <Styles.Title>
                    Nós recebemos seus dados e as respostas!
                </Styles.Title>

                <Styles.Text>
                    Nosso atendimento costuma ser bem rápido, você receberá um
                    e-mail de resposta e também chamaremos no whatsapp para
                    começar o entendimento cada vez mais profundo da sua ideia!
                    Muito obrigado novamente por entrar em contato! Até já!
                </Styles.Text>
            </Styles.Section>
        </Styles.Container>
    )
}

export default LPContactSuccess
