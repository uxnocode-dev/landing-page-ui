import React from 'react'
import Styles from './styles'
import AppButton from '../app-button'
import { FaArrowRight } from 'react-icons/fa'
import { useAutoAnimate } from '@formkit/auto-animate/react'

type ButtonType = 'button' | 'submit' | 'reset' | undefined

interface IAppButtonNavigatorProps {
    className?: string
    isDisabled?: boolean
    icon?: React.ReactNode

    onNext: Function
    onPrev: Function
    textNext?: string
    textPrev?: string
    showNext?: boolean
    showPrev?: boolean
    typeNext?: ButtonType
    typePrev?: ButtonType
    disabledNext?: boolean
    disabledPrev?: boolean
}

const AppButtonNavigator: React.FC<IAppButtonNavigatorProps> = props => {
    const {
        onNext,
        onPrev,
        className,
        showPrev = true,
        showNext = true,
        textPrev = 'Voltar',
        typePrev = 'button',
        typeNext = 'button',
        textNext = 'Próximo',
        disabledPrev = false,
        disabledNext = false,
        icon = <FaArrowRight />
    } = props

    const [parent] = useAutoAnimate()

    const prevButton = (
        <AppButton
            type={typePrev}
            showIcon={false}
            colorMode="tertiary"
            onClick={() => onPrev()}
            isDisabled={disabledPrev}
        >
            {textPrev}
        </AppButton>
    )

    const nextButton = (
        <AppButton
            icon={icon}
            type={typeNext}
            onClick={() => onNext()}
            isDisabled={disabledNext}
        >
            {textNext}
        </AppButton>
    )

    return (
        <Styles.Container
            ref={parent}
            className={className}
            isSingle={!showPrev || !showNext}
        >
            {showPrev && <>{prevButton}</>}
            {showNext && <>{nextButton}</>}
        </Styles.Container>
    )
}

export default AppButtonNavigator
