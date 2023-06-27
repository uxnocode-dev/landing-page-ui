import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import landingPage from '@/assets/landing-page'

const LPContactSuccess: React.FC = () => {
    return (
        <Styles.Container>
            <Styles.Image src={landingPage.AvatarContact} />

            <Styles.Section>
                <Styles.ImageLogo src={images.Logo} />
                <Styles.ImageSuccess src={landingPage.ContactSuccess} />

                <Styles.Title>
                    Nós recebemos seus dados e as respostas!
                </Styles.Title>

                <Styles.Text>
                    Nosso atendimento costuma ser bem rápido e você receberá um
                    e-mail de resposta e também chamaremos no whatsapp para
                    começar o entendimento cada vez mais profundo da sua ideia!
                    Muito obrigado novamente por entrar em contato! Até já!
                </Styles.Text>
            </Styles.Section>
        </Styles.Container>
    )
}

export default LPContactSuccess
