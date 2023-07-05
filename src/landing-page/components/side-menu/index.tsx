import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import LPSocialMedia from '../social-media'
import landingPage from '@/assets/landing-page'
import AppSideMenu from '@/components/common/app-side-menu'
import { ILandingPageMenuItem } from '@/components/@interface/landing-page-menu.interface'

interface ISideMenuProps {
    show: boolean
    onClose: Function
    items: ILandingPageMenuItem[]
    onSelect: (item: ILandingPageMenuItem) => void
}

const LPSideMenu: React.FC<ISideMenuProps> = props => {
    const { show, items, onClose, onSelect } = props

    return (
        <AppSideMenu
            show={show}
            fullContent
            showLogo={false}
            onClose={onClose}
            imageBg={landingPage.SideMenuBG}
        >
            <Styles.Container>
                <Styles.Image src={images.LogoMascot} />
                <Styles.Title>uxnocode</Styles.Title>

                <Styles.Group>
                    {items
                        .filter(({ isSoon }) => !isSoon)
                        .map((item, index) => (
                            <Styles.Item
                                key={index}
                                onClick={() => onSelect(item)}
                            >
                                {item.title}
                            </Styles.Item>
                        ))}
                </Styles.Group>

                <LPSocialMedia />
            </Styles.Container>
        </AppSideMenu>
    )
}

export default LPSideMenu
