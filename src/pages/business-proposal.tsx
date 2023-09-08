import React from 'react'
import AppHead from '@/components/common/app-head'
import Styles from '@/styles/pages/business-proposal'

const BusinessProposal: React.FC = () => {
    const url = `https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQrWk8TmIygFbTGmTsBR1s3%2Fproposta-comercial-uxnocode%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-376%26viewport%3D435%252C317%252C0.06%26t%3D34jaXWIs0nd2CTdl-1%26scaling%3Dmin-zoom%26mode%3Ddesign`

    return (
        <>
            <AppHead title="uxnocode - Proposta comercial" />

            <Styles.Container>
                <Styles.FrameContainer src={url} />
            </Styles.Container>
        </>
    )
}

export default BusinessProposal
