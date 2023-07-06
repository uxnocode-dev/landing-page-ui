import React from 'react'
import Styles from './styles'
import { FiArrowUpRight } from 'react-icons/fi'
import { scrollTo } from '@/functions/scroll-to.function'
import { CASES_DATA } from '@/landing-page/data/cases.data'
import AppButton from '@/components/common/@button/app-button'
import LPSectionTitle from '@/landing-page/components/section-title'
import LPContentPaginator from '@/components/common/content-paginator'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

const LPCases: React.FC = () => {
    const goToContact = () => scrollTo(LANDING_PAGE_NAVIGATION.contact)

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.cases}>
            <LPSectionTitle title="Cases de sucesso" />

            <Styles.Text className="my-4 text-center">
                Dá uma olhada em alguns projetos que já fizemos. Em breve o seu
                estará aqui!
            </Styles.Text>

            <LPContentPaginator itemsPerPage={3}>
                {CASES_DATA.map((item, index) => (
                    <Styles.Card key={index}>
                        <Styles.Image imageURL={item.image} />
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
