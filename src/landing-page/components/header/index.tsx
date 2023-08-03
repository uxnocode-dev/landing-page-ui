import React, { useState } from 'react'
import Styles from './styles'
import images from '@/assets/images'
import LPSideMenu from '../side-menu'
import { CgScreen } from 'react-icons/cg'
import { FaGripLines } from 'react-icons/fa'
import { BiCodeBlock } from 'react-icons/bi'
import { FiAlertCircle, FiSmile } from 'react-icons/fi'
import { useWindowSize } from '@/hooks/window-size.hook'
import { scrollTo } from '@/functions/scroll-to.function'
import useScrollPosition from '@/hooks/scroll-position.hook'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import { ILandingPageMenuItem } from '@/components/@interface/landing-page-menu.interface'
import {
    AiFillStar,
    AiOutlineTrophy,
    AiOutlineArrowUp,
    AiOutlineFileUnknown,
    AiOutlineUsergroupAdd
} from 'react-icons/ai'

interface ILPHeaderProps {
    openModal: Function
}

const LPHeader: React.FC<ILPHeaderProps> = props => {
    const { openModal } = props
    const { isMobile } = useWindowSize()
    const isScrollPastPosition = useScrollPosition(50)
    const [showSideMenu, setShowSideMenu] = useState(false)

    const items: ILandingPageMenuItem[] = [
        {
            icon: <AiOutlineArrowUp />,
            title: 'Topo',
            id: LANDING_PAGE_NAVIGATION.top
        },
        {
            icon: <AiFillStar />,
            title: 'Diferenciais',
            id: LANDING_PAGE_NAVIGATION.differentials
        },
        {
            title: 'Projetos',
            icon: <AiOutlineTrophy />,
            id: LANDING_PAGE_NAVIGATION.cases
        },
        {
            icon: <BiCodeBlock />,
            title: 'Desenvolvimento',
            id: LANDING_PAGE_NAVIGATION.development
        },
        {
            title: 'Sobre nós',
            icon: <FiAlertCircle />,
            id: LANDING_PAGE_NAVIGATION.about
        },
        {
            icon: <FiSmile />,
            title: 'Depoimentos',
            id: LANDING_PAGE_NAVIGATION.testimony
        },
        {
            title: 'FAQs',
            icon: <AiOutlineFileUnknown />,
            id: LANDING_PAGE_NAVIGATION.faq
        },
        {
            title: 'Equipe',
            icon: <AiOutlineUsergroupAdd />,
            id: LANDING_PAGE_NAVIGATION.team
        },
        { icon: <CgScreen />, title: 'Carreira', action: () => openModal() },
        { icon: <></>, isSoon: true, title: 'Entrar', action: () => {} }
    ].filter(({ id }) => {
        const hideMobile = [LANDING_PAGE_NAVIGATION.differentials]
        return hideMobile.some(item => item !== id)
    })

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
        </>
    )
}

export default LPHeader
