import Styles from './styles'
import React, { useState } from 'react'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { useWindowSize } from '@/hooks/window-size.hook'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import AppButton from '@/components/common/@button/app-button'
import ScrollAnimation from '@/components/common/scroll-animation'
import LPSectionTitle from '@/landing-page/components/section-title'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { DEVELOPMENT_DATA } from '@/landing-page/data/development.data'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

interface IDevelopmentProps {
    openModal: Function
}
const LPDevelopment: React.FC<IDevelopmentProps> = ({ openModal }) => {
    const [parent] = useAutoAnimate()
    const { isMobile } = useWindowSize()
    const [showItems, setShowItems] = useState(false)

    const isShowItems = !isMobile ? true : showItems
    const actionLabel = isShowItems ? 'Ver menos' : 'Ver mais'
    const actionIcon = isShowItems ? (
        <AiOutlineArrowUp />
    ) : (
        <AiOutlineArrowDown />
    )

    const toggleShowItems = () => setShowItems(!showItems)

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.development}>
            <LPSectionTitle title="Nosso desenvolvimento" />

            {DEVELOPMENT_DATA.map((item, index) => (
                <Styles.Card key={index}>
                    <Styles.CardImage src={item.image} />
                    <Styles.CardContent ref={parent}>
                        <Styles.Badge>
                            {item.icon}
                            {item.title}
                        </Styles.Badge>

                        <Styles.Title>{item.description}</Styles.Title>

                        {isShowItems && (
                            <Styles.ItemsGroup>
                                {item.items.map((subItem, subIndex) => (
                                    <Styles.ItemContainer key={subIndex}>
                                        <IoMdCheckboxOutline />
                                        <Styles.ItemText>
                                            {subItem}
                                        </Styles.ItemText>
                                    </Styles.ItemContainer>
                                ))}
                            </Styles.ItemsGroup>
                        )}

                        <AppButton onClick={() => openModal()}>
                            Quero saber mais
                        </AppButton>

                        <Styles.ActionButton onClick={toggleShowItems}>
                            {actionLabel}
                            {actionIcon}
                        </Styles.ActionButton>
                    </Styles.CardContent>
                </Styles.Card>
            ))}
        </Styles.Container>
    )
}

export default LPDevelopment
