import React from 'react'
import Styles from './styles'
import { FiArrowUpRight } from 'react-icons/fi'
import landingPage from '@/assets/landing-page'
import { scrollTo } from '@/functions/scroll-to.function'
import AppButton from '@/components/common/@button/app-button'
import LPSectionTitle from '@/landing-page/components/section-title'
import LPContentPaginator from '@/components/common/content-paginator'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

const LPCases: React.FC = () => {
    const goToContact = () => scrollTo(LANDING_PAGE_NAVIGATION.contact)

    const items = [
        {
            title: `Smarttec`,
            description: `Sistema de câmeras com IA`,
            image: landingPage.cases.SmartTec
        },
        {
            title: `Bora Planejar`,
            description: `Sistema organizacional`,
            image: landingPage.cases.BoraPlanejar
        },
        {
            title: `Por questões contratuais não podemos divulgar nome`,
            description: `Sistema de documentação`,
            image: landingPage.cases.Documentacao
        },

        {
            title: `Smarttec 2`,
            description: `Sistema de câmeras com IA`,
            image: landingPage.cases.SmartTec
        },
        {
            title: `Bora Planejar 3`,
            description: `Sistema organizacional`,
            image: landingPage.cases.BoraPlanejar
        }
    ]

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.cases}>
            <LPSectionTitle title="Cases de sucesso" />

            <Styles.Text className="my-4 text-center">
                Dá uma olhada em alguns projetos que já fizemos. Em breve o seu
                estará aqui!
            </Styles.Text>

            <LPContentPaginator itemsPerPage={3}>
                {items.map((item, index) => (
                    <Styles.Card key={index}>
                        <Styles.Image src={item.image} />
                        <Styles.CardTitle>{item.title}</Styles.CardTitle>
                        <Styles.CardBody>
                            {item.description}
                            <FiArrowUpRight />
                        </Styles.CardBody>
                    </Styles.Card>
                ))}
            </LPContentPaginator>

            <AppButton onClick={goToContact} className="mt-16">
                Quero meu case aqui também
            </AppButton>
        </Styles.Container>
    )
}

export default LPCases
