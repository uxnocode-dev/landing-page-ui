import React from 'react'
import Styles, { ShadowModeType } from './styles'
import ScrollAnimation from '@/components/common/scroll-animation'

interface ILPSectionTitleProps {
    title: string
    className?: string
    shadowMode?: ShadowModeType
}

const LPSectionTitle: React.FC<ILPSectionTitleProps> = props => {
    const { title, shadowMode = 'primary', className = '' } = props

    return (
        <ScrollAnimation animation="fadeInDown">
            <Styles.Container className={className}>
                <Styles.ShadowTitle mode={shadowMode}>
                    {title}
                </Styles.ShadowTitle>
                <Styles.Title>{title}</Styles.Title>
            </Styles.Container>
        </ScrollAnimation>
    )
}

export default LPSectionTitle
