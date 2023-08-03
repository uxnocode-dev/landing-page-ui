import React from 'react'
import Styles from './styles'
import { BiCheckSquare } from 'react-icons/bi'
import AppButton from '@/components/common/@button/app-button'
import LPSectionTitle from '@/landing-page/components/section-title'
import { DEVELOPMENT_DATA } from '@/landing-page/data/development.data'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

interface IDevelopmentProps {
    openModal: Function
}
const LPDevelopment: React.FC<IDevelopmentProps> = ({ openModal }) => {
    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.development}>
            <LPSectionTitle title="Nosso desenvolvimento" />

            {DEVELOPMENT_DATA.map((item, index) => (
                <Styles.Card key={index}>
                    <Styles.CardImage src={item.image} />
                    <Styles.CardContent>
                        <Styles.Badge>
                            {item.icon}
                            {item.title}
                        </Styles.Badge>

                        <Styles.Title>{item.description}</Styles.Title>

                        {item.items.map((subItem, subIndex) => (
                            <Styles.ItemContainer key={subIndex}>
                                <BiCheckSquare />
                                <Styles.ItemText>{subItem}</Styles.ItemText>
                            </Styles.ItemContainer>
                        ))}

                        <AppButton onClick={() => openModal()}>
                            Quero saber mais
                        </AppButton>
                    </Styles.CardContent>
                </Styles.Card>
            ))}
        </Styles.Container>
    )
}

export default LPDevelopment
