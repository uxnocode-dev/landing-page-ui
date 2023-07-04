import React from 'react'

export interface AppModalInterface {
    width?: number | string
    height?: number | string
    maxWidth?: number | string
    maxHeight?: number | string
    isOpen: boolean
    header?: JSX.Element
    footer?: JSX.Element
    onClose?: Function
    onClickClose?: Function
    onBackdropClick?: Function
    children?: React.ReactNode
    containerStyle?: React.CSSProperties
    backdropStyle?: React.CSSProperties
    color?: string
}
