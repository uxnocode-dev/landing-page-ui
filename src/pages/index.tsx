import React, { useState } from 'react'
import LPFaq from '@/landing-page/sections/faq'
import LPHero from '@/landing-page/sections/hero'
import LPTeam from '@/landing-page/sections/team'
import AppHead from '@/components/common/app-head'
import LPCases from '@/landing-page/sections/cases'
import LPHeader from '@/landing-page/components/header'
import LPFooter from '@/landing-page/components/footer'
import LPContact from '@/landing-page/sections/contact'
import LPServices from '@/landing-page/sections/services'
import LPTechnologies from '@/landing-page/sections/technologies'
import LPModalCareer from '@/landing-page/components/modal-career'
import LPDifferentials from '@/landing-page/sections/differentials'

const Home: React.FC = () => {
    const [showModalCareer, setShowModalCareer] = useState(false)
    const handleOpenModalCareer = () => setShowModalCareer(true)

    return (
        <>
            <AppHead title="uxnocode" />

            <LPHeader openModalCareer={handleOpenModalCareer} />
            <LPHero />
            <LPServices />
            <LPTechnologies />
            <LPDifferentials />
            <LPCases />
            <LPFaq />
            <LPContact />
            <LPTeam />
            <LPFooter openModalCareer={handleOpenModalCareer} />

            <LPModalCareer
                isOpen={showModalCareer}
                onBackdropClick={() => setShowModalCareer(false)}
            />
        </>
    )
}

export default Home
