import React, { useState } from 'react'
import Styles from './styles'
import images from '@/assets/images'
import theme from '@/styles/ts/theme'
import { scrollTo } from '@/functions/scroll-to.function'
import useScrollPosition from '@/hooks/scroll-position.hook'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import { ILandingPageMenuItem } from '@/components/@interface/landing-page-menu.interface'

const LPHeader: React.FC = () => {
    const isScrollPastPosition = useScrollPosition(50)
    const [showSideMenu, setShowSideMenu] = useState(false)

    const items: ILandingPageMenuItem[] = [
        { title: 'Topo', id: LANDING_PAGE_NAVIGATION.top },
        { title: 'Serviços', id: LANDING_PAGE_NAVIGATION.services },
        { title: 'Diferenciais', id: LANDING_PAGE_NAVIGATION.differentials },
        { title: 'Cases', id: LANDING_PAGE_NAVIGATION.cases },
        { title: 'FAQs', id: LANDING_PAGE_NAVIGATION.faq },
        { title: 'Contato', id: LANDING_PAGE_NAVIGATION.contact },
        { title: 'Carreira', id: LANDING_PAGE_NAVIGATION.career },
        { title: 'Entrar', action: () => {} }
    ]

    const toggleSideMenuOpen = () => setShowSideMenu(!showSideMenu)

    const handleClickItem = (item: ILandingPageMenuItem) => {
        if (item.action) item.action()
        else if (item.id) scrollTo(item.id, 74)

        if (showSideMenu) toggleSideMenuOpen()
    }

    const headerStyle: React.CSSProperties = {
        opacity: isScrollPastPosition ? 1 : 0.5,
        backdropFilter: 'blur(5px)'
    }

    return (
        <Styles.Header style={headerStyle}>
            <Styles.Container>
                <Styles.Image src={images.Logo} />

                <Styles.Group>
                    {items.map((item, index) => (
                        <Styles.Link
                            key={index}
                            onClick={() => handleClickItem(item)}
                        >
                            {item.title}
                        </Styles.Link>
                    ))}
                </Styles.Group>
            </Styles.Container>
        </Styles.Header>
    )
}

export default LPHeader
