import Styles from './styles'
import images from '@/assets/images'
import { MdClose } from 'react-icons/md'
import { FaArrowLeft } from 'react-icons/fa'
import React, { useEffect, useRef } from 'react'
import { AppModalInterface } from '@/interfaces/_app-modal.interface'

const AppModal: React.FC<AppModalInterface> = props => {
    const backdropEl = useRef(null)
    const {
        color,
        width,
        isOpen,
        height,
        header,
        footer,
        isFull,
        maxWidth,
        children,
        maxHeight,
        onClickClose,
        backdropStyle,
        containerStyle,
        onBackdropClick,
        showMobileHeader,
        onMobileHeaderClick
    } = props

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    }, [isOpen])

    const handleBackdropClick = (element: EventTarget) => {
        const isBackdrop = element === backdropEl.current
        if (!isBackdrop || !onBackdropClick) return

        onBackdropClick()
    }

    const handleClickBackHeader = () => {
        if (onMobileHeaderClick) onMobileHeaderClick()
    }

    return (
        <>
            {isOpen && (
                <Styles.Backdrop
                    isFull={isFull}
                    ref={backdropEl}
                    style={backdropStyle}
                    onClick={({ target }) => handleBackdropClick(target)}
                >
                    <Styles.ModalContainer
                        style={{
                            maxWidth,
                            maxHeight,
                            ...containerStyle,
                            width: width || 490,
                            height: height || 'fit-content'
                        }}
                    >
                        {showMobileHeader && (
                            <Styles.MobileHeader>
                                <Styles.MobileHeaderImage src={images.Logo} />
                                <Styles.MobileHeaderButton
                                    onClick={handleClickBackHeader}
                                >
                                    <FaArrowLeft />
                                </Styles.MobileHeaderButton>
                            </Styles.MobileHeader>
                        )}

                        {header && (
                            <Styles.ModalHeader>{header}</Styles.ModalHeader>
                        )}
                        <Styles.ModalBody color={color}>
                            {children}
                        </Styles.ModalBody>
                        {footer && (
                            <Styles.ModalFooter>{footer}</Styles.ModalFooter>
                        )}
                    </Styles.ModalContainer>

                    {onClickClose && (
                        <Styles.Button
                            color={color}
                            onClick={() => onClickClose()}
                        >
                            Fechar
                            <MdClose />
                        </Styles.Button>
                    )}
                </Styles.Backdrop>
            )}
        </>
    )
}

export default AppModal
