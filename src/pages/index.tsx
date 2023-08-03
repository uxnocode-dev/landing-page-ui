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
import LPTestimony from '@/landing-page/sections/testimony'
import LPDevelopment from '@/landing-page/sections/development'
import LPModalCareer from '@/landing-page/components/modal-career'
import LPDifferentials from '@/landing-page/sections/differentials'
import LPModalContact from '@/landing-page/components/modal-contact'

const Home: React.FC = () => {
    const [showModalCareer, setShowModalCareer] = useState(false)
    const handleOpenModalCareer = () => setShowModalCareer(true)

    const [showModalContact, setShowModalContact] = useState(false)
    const handleOpenModalContact = () => setShowModalContact(true)

    return (
        <>
            <AppHead title="uxnocode" />
            <LPHeader openModal={handleOpenModalCareer} />
            <LPHero openModal={handleOpenModalContact} />
            <LPDifferentials />
            {/* <LPServices /> */}
            {/* <LPTechnologies /> */}
            <LPCases openModal={handleOpenModalContact} />
            <LPDevelopment openModal={handleOpenModalContact} />
            <LPAbout openModal={handleOpenModalContact} />
            <LPTestimony />
            <LPWorks />
            <LPContact openModal={handleOpenModalContact} />
            <LPFaq />
            <LPTeam />
            <LPFooter openModal={handleOpenModalCareer} />

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
