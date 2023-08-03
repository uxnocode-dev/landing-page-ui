import React from 'react'
import Styles from './styles'
import { CASES_DATA } from '@/landing-page/data/cases.data'
import AppButton from '@/components/common/@button/app-button'
import LPSectionTitle from '@/landing-page/components/section-title'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

interface ICasesProps {
    openModal: Function
}
const LPCases: React.FC<ICasesProps> = ({ openModal }) => {
    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.cases}>
            <LPSectionTitle title="Projetos de sucesso" />

            <Styles.Content>
                {CASES_DATA.map((item, index) => (
                    <Styles.Image src={item.image} key={index} />
                ))}
            </Styles.Content>

            <AppButton loopEffect onClick={() => openModal()} className="mt-16">
                Quero meu case aqui também
            </AppButton>
        </Styles.Container>
    )
}

export default LPCases
