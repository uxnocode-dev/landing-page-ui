import { scrollBar } from '@/styles/ts/mixins/scroll-bar.mixin'
import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'

const animationIn = {
    className: 'animate__animated animate__fadeIn'
}

const fullMode = css`
    ${tw`p-0!`}
    background: ${({ theme }) => theme.colors.bgSecondary};

    :has(header) {
        > article {
            padding-top: ${({ theme }) =>
                `calc(${theme.spacing.landing_page_header_height} + 1rem)`} !important;
        }
    }

    > article {
        ${tw`pt-0! w-full! h-full! min-h-full! max-h-full! max-w-full! rounded-none`}

        > div {
            ${tw`pt-0!`}
        }
    }
`

interface CommonProps {
    color?: string
}

interface IBackdropProps {
    isFull?: boolean
}

const Backdrop = styled.section<IBackdropProps>`
    ${tw`fixed w-full h-full top-0 left-0 flex flex-col justify-start items-center z-30`}
    background: ${({ theme }) => rgba(theme.colors.bgSecondary, 0.7)};
    padding-top: 16vh;
    backdrop-filter: blur(5px);
    ${({ isFull }) => (isFull ? fullMode : null)};
`

const ModalContainer = styled.article.attrs(animationIn)`
    ${tw`p-6 pr-2 pb-10 flex flex-col z-50 rounded-lg mx-14`}
    height: 40vh;
    background: ${({ theme }) => theme.colors.bgPrimary};
    max-height: 75vh;
    max-width: 1440px;
`

const ModalHeader = styled.div``

const ModalBody = styled.div<CommonProps>`
    ${tw`flex-auto overflow-y-auto overflow-x-hidden px-4`}
    ${scrollBar('2px')}

    ::-webkit-scrollbar-thumb {
        border: 0px solid #ffffff;
        background-color: ${({ theme, color }) =>
            color || theme.colors.bgSecondary};
    }
`

const ModalFooter = styled.div`
    ${tw`py-2`}
`

const Button = styled.button.attrs(animationIn)<CommonProps>`
    ${tw`px-4 py-2 flex justify-center items-center z-50 rounded-full relative bottom-5`}
    background: ${({ theme, color }) => color || theme.colors.primary};
    color: ${({ theme }) => theme.colors.bgPrimary};

    > svg {
        ${tw`text-lg ml-2`}
    }
`

const MobileHeader = styled.header`
    ${tw`px-8 w-full  items-center justify-between fixed left-0 top-0 hidden sm:flex`}

    background: ${({ theme }) => theme.colors.bgSecondary};
    height: ${({ theme }) => theme.spacing.landing_page_header_height};

    &::before {
        content: '';
    }
`

const MobileHeaderImage = styled.img`
    ${tw`h-8`}
`

const MobileHeaderButton = styled.button`
    color: ${({ theme }) => theme.colors.placeholder};
`

export default {
    MobileHeaderButton,
    MobileHeaderImage,
    ModalContainer,
    MobileHeader,
    ModalFooter,
    ModalHeader,
    ModalBody,
    Backdrop,
    Button
}
