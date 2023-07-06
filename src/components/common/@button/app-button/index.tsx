import React, { ButtonHTMLAttributes } from 'react'
import Styles from './styles'
import { FaArrowRight } from 'react-icons/fa'

export type AppButtonColorMode =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'transparent'

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    showIcon?: boolean
    className?: string
    isDisabled?: boolean
    icon?: React.ReactNode
    hoverAnimation?: boolean
    children: React.ReactNode
    colorMode?: AppButtonColorMode
}

const AppButton: React.FC<IAppButtonProps> = props => {
    const {
        onClick,
        children,
        className,
        isDisabled,
        showIcon = true,
        hoverAnimation = true,
        colorMode = 'primary',
        icon = <FaArrowRight />
    } = props

    const hoverAnimationClassName = hoverAnimation ? 'animation-hover' : ''
    const classNameControl = `${className} ${hoverAnimationClassName}`

    return (
        <Styles.Button
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
