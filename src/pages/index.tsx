import React, { useState } from 'react'
import LPFaq from '@/landing-page/sections/faq'
import LPHero from '@/landing-page/sections/hero'
import LPTeam from '@/landing-page/sections/team'
import AppHead from '@/components/common/app-head'
import LPCases from '@/landing-page/sections/cases'
import LPAbout from '@/landing-page/sections/about'
import LPWorks from '@/landing-page/sections/works'
import LPHeader from '@/landing-page/components/header'
import LPFooter from '@/landing-page/components/footer'
import LPContact from '@/landing-page/sections/contact'
import { useWindowSize } from '@/hooks/window-size.hook'
import LPTestimony from '@/landing-page/sections/testimony'
import LPDevelopment from '@/landing-page/sections/development'
import LPFlutterApps from '@/landing-page/sections/flutter-apps'
import LPModalCareer from '@/landing-page/components/modal-career'
import LPDifferentials from '@/landing-page/sections/differentials'
import LPModalContact from '@/landing-page/components/modal-contact'
import FloatWhatsappButton from '@/landing-page/components/float-whatsapp-button'

const Home: React.FC = () => {
    const { isMobile } = useWindowSize()
    const [showModalCareer, setShowModalCareer] = useState(false)
    const handleOpenModalCareer = () => setShowModalCareer(true)

    const [showModalContact, setShowModalContact] = useState(false)
    const handleOpenModalContact = () => setShowModalContact(true)

    return (
        <>
            <AppHead title="uxnocode" />
            <LPHeader openModal={handleOpenModalCareer} />
            <LPHero openModal={handleOpenModalContact} />
            <LPAbout openModal={handleOpenModalContact} />
            {!isMobile && <LPDifferentials />}
            <LPCases openModal={handleOpenModalContact} />
            <LPTestimony />
            <LPFlutterApps />
            <LPDevelopment openModal={handleOpenModalContact} />
            <LPWorks />
            <LPContact openModal={handleOpenModalContact} />
            <LPFaq />
            <LPTeam />
            <FloatWhatsappButton />

            <LPFooter
                openModal={handleOpenModalCareer}
                openModalContact={handleOpenModalContact}
            />
            <LPModalCareer
                isOpen={showModalCareer}
                onClose={() => setShowModalCareer(false)}
            />
            <LPModalContact
                isOpen={showModalContact}
                onClose={() => setShowModalContact(false)}
            />
        </>
    )
}

export default Home
