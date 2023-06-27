import React, { ButtonHTMLAttributes } from 'react'
import Styles from './styles'
import { FaArrowRight } from 'react-icons/fa'

interface ILPButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    isDisabled?: boolean
    icon?: React.ReactNode
    children: React.ReactNode
}

const LPButton: React.FC<ILPButtonProps> = props => {
    const {
        children,
        icon = <FaArrowRight />,
        className,
        onClick,
        isDisabled
    } = props

    return (
        <Styles.Button
            onClick={onClick}
            className={className}
            disabled={isDisabled}
        >
            <Styles.Text>{children}</Styles.Text>
            <Styles.Icon>{icon}</Styles.Icon>
        </Styles.Button>
    )
}

export default LPButton
