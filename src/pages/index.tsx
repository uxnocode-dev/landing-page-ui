import React from 'react'
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
import LPDifferentials from '@/landing-page/sections/differentials'

const Home: React.FC = () => {
    return (
        <>
            <AppHead title="uxnocode" />

            <LPHeader />
            <LPHero />
            <LPServices />
            <LPTechnologies />
            <LPDifferentials />
            <LPCases />
            <LPFaq />
            <LPContact />
            <LPTeam />
            <LPFooter />
        </>
    )
}

export default Home
