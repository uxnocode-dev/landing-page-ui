import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import LPSocialMedia from '../social-media'
import { FaArrowLeft } from 'react-icons/fa'
import landingPage from '@/assets/landing-page'
import AppSideMenu from '@/components/common/app-side-menu'
import { ILandingPageMenuItem } from '@/components/@interface/landing-page-menu.interface'
import AppButton from '@/components/common/@button/app-button'

interface ISideMenuProps {
    show: boolean
    onClose: Function
    items: ILandingPageMenuItem[]
    onSelect: (item: ILandingPageMenuItem) => void
}

const LPSideMenu: React.FC<ISideMenuProps> = props => {
    const { show, items, onClose, onSelect } = props

    return (
        <AppSideMenu show={show} fullContent showLogo={false}>
            <Styles.Container>
                <Styles.Header>
                    <Styles.HeaderImage src={images.Logo} />
                    <Styles.HeaderButton onClick={() => onClose()}>
                        <FaArrowLeft />
                    </Styles.HeaderButton>
                </Styles.Header>

                <Styles.Title>Menu</Styles.Title>

                <Styles.Group>
                    {items
                        .filter(({ isSoon }) => !isSoon)
                        .map((item, index) => (
                            <Styles.Item
                                key={index}
                                onClick={() => onSelect(item)}
                            >
                                {item.icon}
                                {item.title}
                            </Styles.Item>
                        ))}
                </Styles.Group>

                <AppButton isDisabled={true}>
                    <Styles.Badge>Em breve</Styles.Badge>
                    Entrar
                </AppButton>

                <LPSocialMedia />
            </Styles.Container>
        </AppSideMenu>
    )
}

export default LPSideMenu
