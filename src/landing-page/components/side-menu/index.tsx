import React from 'react'
import Styles from './styles'
import AppSideMenu from '@/components/common/app-side-menu'
import { ILandingPageMenuItem } from '@/components/@interface/landing-page-menu.interface'
import landingPage from '@/assets/landing-page'

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
                <Styles.Title>uxnocode</Styles.Title>
                <Styles.Group>
                    {items.map((item, index) => (
                        <Styles.Item key={index} onClick={() => onSelect(item)}>
                            {item.title}
                        </Styles.Item>
                    ))}
                </Styles.Group>
            </Styles.Container>
        </AppSideMenu>
    )
}

export default LPSideMenu
