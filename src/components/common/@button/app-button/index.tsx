import React, { ButtonHTMLAttributes, useEffect, useRef } from 'react'
import Styles from './styles'
import { FaArrowRight } from 'react-icons/fa'

export type AppButtonColorMode =
    | 'white'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'transparent'

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    showIcon?: boolean
    className?: string
    isDisabled?: boolean
    loopEffect?: boolean
    icon?: React.ReactNode
    hoverAnimation?: boolean
    children: React.ReactNode
    loopEffectAnimation?: string
    colorMode?: AppButtonColorMode
}

const AppButton: React.FC<IAppButtonProps> = props => {
    const {
        onClick,
        children,
        className,
        isDisabled,
        showIcon = false,
        loopEffect = false,
        loopEffectAnimation = '',
        hoverAnimation = true,
        colorMode = 'primary',
        icon = <FaArrowRight />
    } = props

    const buttonRef = useRef<HTMLButtonElement>(null)
    const hoverAnimationClassName = hoverAnimation ? 'animation-hover' : ''

    const enableLoopEffect = !!loopEffectAnimation || loopEffect
    const pulseInfiniteAnimation = enableLoopEffect
        ? `animate__animated animate__repeat-2`
        : ''
    const classNameControl = `${className} ${hoverAnimationClassName} ${pulseInfiniteAnimation}`

    useEffect(() => {
        if (!enableLoopEffect) return

        const playAnimation = () => {
            const button = buttonRef.current
            const animation = loopEffectAnimation || 'animate__pulse'
            if (!button) return

            button.classList.add(animation)
            setTimeout(() => button?.classList.remove(animation), 3000)
        }

        playAnimation()
        const interval = setInterval(playAnimation, 6000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Styles.Button
            ref={buttonRef}
            onClick={onClick}
            disabled={isDisabled}
            colorMode={colorMode}
            className={classNameControl}
        >
            <Styles.Text>{children}</Styles.Text>
            {showIcon && <Styles.Icon>{icon}</Styles.Icon>}
        </Styles.Button>
    )
}

export default AppButton
