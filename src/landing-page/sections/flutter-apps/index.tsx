import React from 'react'
import Styles from './styles'
import { useWindowSize } from '@/hooks/window-size.hook'
import CarouselLoop from '@/components/common/carousel-loop'
import LPSectionTitle from '@/landing-page/components/section-title'
import { FLUTTER_APPS } from '@/landing-page/data/flutter-apps.data'

const LPFlutterApps: React.FC = () => {
    const { isMobile } = useWindowSize()
    const slidesPerView = isMobile ? 2 : 4

    return (
        <Styles.Container>
            <LPSectionTitle
                shadowMode="secondary"
                title="Apps desenvolvidos em Flutter"
            />

            <Styles.Content>
                <CarouselLoop stopOnHover slidesPerView={slidesPerView}>
                    {FLUTTER_APPS.map((item, index) => (
                        <Styles.Card key={index}>
                            <Styles.Image src={item.image} />
                            <Styles.Title>{item.title}</Styles.Title>
                        </Styles.Card>
                    ))}
                </CarouselLoop>
            </Styles.Content>
        </Styles.Container>
    )
}

export default LPFlutterApps
