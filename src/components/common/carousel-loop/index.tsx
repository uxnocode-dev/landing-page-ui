import Styles from './styles'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useEffect, useRef, useState } from 'react'
interface ICarouselLoopProps {
    speed?: number
    stopOnHover?: boolean
    slidesPerView?: number
    children: React.ReactNode
}

const CarouselLoop: React.FC<ICarouselLoopProps> = props => {
    const {
        children,
        slidesPerView = 4,
        speed = 2000,
        stopOnHover = false
    } = props

    const swiperRef = useRef<any>(null)
    const [items, setItems] = useState<JSX.Element[]>([])
    const [isHovered, setIsHovered] = useState<boolean>(false)

    useEffect(() => {
        if (!stopOnHover || !swiperRef.current.swiper) return
        const swiper = swiperRef.current.swiper

        if (isHovered) swiper.autoplay.stop()
        else swiper.autoplay.start()
    }, [isHovered])

    useEffect(() => {
        const elements = React.Children.toArray(children)

        const result = [...elements, ...elements].map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
        ))

        setItems(result)
    }, [children])

    return (
        <>
            <Styles.Container
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Swiper
                    loop={true}
                    speed={speed}
                    modules={[Autoplay]}
                    centeredSlides={true}
                    autoplay={{ delay: 400 }}
                    slidesPerView={slidesPerView}
                    onSwiper={swiper => (swiperRef.current = swiper)}
                >
                    {items}
                </Swiper>
            </Styles.Container>
        </>
    )
}

export default CarouselLoop
