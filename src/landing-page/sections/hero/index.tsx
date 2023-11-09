import React from 'react'
import Styles from './styles'
import HeroMock from './hero-mock'
import { FiPenTool } from 'react-icons/fi'
import HeroSocialProof from './hero-social-proof'
import AppButton from '@/components/common/@button/app-button'
import TypingText from '@/landing-page/components/typing-text'
import LPSocialMedia from '@/landing-page/components/social-media'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

interface IHeroProps {
    openModal: Function
}
const LPHero: React.FC<IHeroProps> = ({ openModal }) => {
    return (
        <Styles.ContainerWrapper>
            <Styles.Container id={LANDING_PAGE_NAVIGATION.top}>
                <Styles.Content>
                    <Styles.PenIcon>
                        <FiPenTool />
                    </Styles.PenIcon>

                    <Styles.Row>
                        <LPSocialMedia />
                        <Styles.TextLight>
                            Fique por dentro em nossas redes sociais!
                        </Styles.TextLight>
                    </Styles.Row>

                    <TypingText
                        text="Descobertas, design, desenvolvimento e suporte. Conheça o nosso método exclusivo de criar sistemas e apps!"
                        className="min-h-[144px] leading-[3rem] text-[2rem] mb-2 font-bold sm:text-[1.2rem] sm:block sm:leading-normal sm:text-center sm:min-h-0 sm:mb-6"
                    />

                    <Styles.Text>
                        O mercado low-code se consolidou como uma solução para
                        ajudar empresas a obter acesso a aplicativos eficientes e robustos a preços acessíveis. Também desenvolvemos aplicações mais complexas em código tradicional.
                    </Styles.Text>

                    <Styles.Text className='my-6'>Qual solução você precisa hoje?</Styles.Text>

                    <Styles.Text className="w-4/5 sm:w-full">
                        <Styles.ColoredText>
                            Desenvolvemos apps{' '}
                        </Styles.ColoredText>
                        com a mesma metodologia usada por gigantes como
                        <Styles.ColoredText>
                            {' '}
                            Ifood, Uber, Netflix, Mercado Livre, Instagram e
                            Whatsapp.
                        </Styles.ColoredText>
                    </Styles.Text>

                    <Styles.Text className="mt-10 mb-6">
                        Quer entender como fazemos?
                    </Styles.Text>

                    <AppButton onClick={() => openModal()} loopEffect>
                        Sim, quero saber mais
                    </AppButton>
                </Styles.Content>

                <HeroMock className="w-2/4 sm:w-full" />
            </Styles.Container>

            <HeroSocialProof />
        </Styles.ContainerWrapper>
    )
}

export default LPHero
