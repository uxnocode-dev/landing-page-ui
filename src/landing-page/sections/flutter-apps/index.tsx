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
            <LPSectionTitle title="Apps desenvolvidos em Flutter" />

            <Styles.Title>Você ainda tem alguma dúvida que o FlutterFlow entrega apps robustos? Veja algumas aplicações construídas com a ferramenta do google.</Styles.Title>

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
