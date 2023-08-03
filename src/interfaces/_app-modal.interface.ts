import React from 'react'

export interface AppModalInterface {
    color?: string
    isOpen: boolean
    isFull?: boolean
    header?: JSX.Element
    footer?: JSX.Element
    width?: number | string
    height?: number | string
    showMobileHeader?: boolean
    maxWidth?: number | string
    maxHeight?: number | string

    onClose?: Function
    onClickClose?: Function
    onBackdropClick?: Function
    onMobileHeaderClick?: Function

    children?: React.ReactNode
    containerStyle?: React.CSSProperties
    backdropStyle?: React.CSSProperties
}
