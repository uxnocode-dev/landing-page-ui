import React, { useState } from 'react'
import Styles from './styles'
import images from '@/assets/images'
import LPSideMenu from '../side-menu'
import LPModalCareer from '../modal-career'
import { FaGripLines } from 'react-icons/fa'
import { scrollTo } from '@/functions/scroll-to.function'
import useScrollPosition from '@/hooks/scroll-position.hook'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import { ILandingPageMenuItem } from '@/components/@interface/landing-page-menu.interface'

const LPHeader: React.FC = () => {
    const isScrollPastPosition = useScrollPosition(50)
    const [showSideMenu, setShowSideMenu] = useState(false)
    const [showModalCareer, setShowModalCareer] = useState(false)

    const items: ILandingPageMenuItem[] = [
        { title: 'Topo', id: LANDING_PAGE_NAVIGATION.top },
        { title: 'Serviços', id: LANDING_PAGE_NAVIGATION.services },
        { title: 'Diferenciais', id: LANDING_PAGE_NAVIGATION.differentials },
        { title: 'Cases', id: LANDING_PAGE_NAVIGATION.cases },
        { title: 'FAQs', id: LANDING_PAGE_NAVIGATION.faq },
        { title: 'Contato', id: LANDING_PAGE_NAVIGATION.contact },
        { title: 'Carreira', action: () => setShowModalCareer(true) },
        { isSoon: true, title: 'Entrar', action: () => {} }
    ]

    const toggleSideMenuOpen = () => setShowSideMenu(!showSideMenu)

    const handleClickLogo = () => scrollTo(LANDING_PAGE_NAVIGATION.top)

    const handleClickItem = (item: ILandingPageMenuItem) => {
        if (item.action) item.action()
        else if (item.id) scrollTo(item.id)

        if (showSideMenu) toggleSideMenuOpen()
    }

    const headerStyle: React.CSSProperties = {
        opacity: isScrollPastPosition ? 1 : 0.5,
        backdropFilter: 'blur(5px)'
    }

    return (
        <>
            <Styles.Header style={headerStyle}>
                <Styles.Container>
                    <Styles.Image src={images.Logo} onClick={handleClickLogo} />

                    <Styles.Group>
                        {items.map((item, index) => (
                            <Styles.Link
                                key={index}
                                onClick={() => handleClickItem(item)}
                            >
                                {item.isSoon && (
                                    <Styles.Badge>Em breve</Styles.Badge>
                                )}

                                {item.title}
                            </Styles.Link>
                        ))}
                    </Styles.Group>

                    <Styles.Button onClick={() => toggleSideMenuOpen()}>
                        <FaGripLines />
                    </Styles.Button>
                </Styles.Container>
            </Styles.Header>

            <LPSideMenu
                items={items}
                show={showSideMenu}
                onClose={() => setShowSideMenu(false)}
                onSelect={item => handleClickItem(item)}
            />

            <LPModalCareer
                isOpen={showModalCareer}
                onBackdropClick={() => setShowModalCareer(false)}
            />
        </>
    )
}

export default LPHeader
