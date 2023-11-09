import styled, { css } from 'styled-components'
import tw from 'twin.macro'

const animation = css`
    -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

    @-webkit-keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

const Wrapper = styled.article`
    ${animation}
    animation-delay: 750ms;
    ${tw`fixed flex items-center z-[2] bottom-8 right-8`}

    * {
        transition: all;
        transition-duration: 500ms;
    }

    &:hover {
        > div {
            ${tw`flex`}
            ${animation}
        }

        > button {
            background-size: 104%;

            > i {
                ${tw`hidden`}
            }
        }
    }
`

const Section = styled.section``

const Title = styled.p`
    ${tw`mb-0 text-[1.063rem] leading-4`}
`

const Text = styled.p`
    ${tw`text-[0.75rem] leading-4`}
`

const ColoredText = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
`

const ColoredTitle = styled.span`
    color: ${({ theme }) => theme.colors.whatsapp_green};
`

const MessageContainer = styled.div`
    ${tw`hidden rounded-md pl-4 pr-12 h-14 items-center gap-1 relative left-8 z-[0]`}
    background: ${({ theme }) => theme.colors.bgSecondary};
    border: 1px solid ${({ theme }) => theme.colors.whatsapp_green};

    i {
        ${tw`text-[2rem]`}
        color: ${({ theme }) => theme.colors.whatsapp_green};
    }
`

interface IButtonProps {
    imageBg: string
}
const Button = styled.button<IButtonProps>`
    ${tw`w-20 h-20 rounded-full relative z-[1]`}
    border: 1px solid ${({ theme }) => theme.colors.whatsapp_green};
    background-image: ${({ imageBg }) => (imageBg ? `url(${imageBg})` : '')};
    background-position: center;
    background-size: 100%;
`

const Icon = styled.i``

const FloatIcon = styled.i`
    ${tw`rounded-full p-1.5 w-7 h-7 absolute left-[-12px]`}
    color: ${({ theme }) => theme.colors.whatsapp_green};
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export default {
    Icon,
    Text,
    Title,
    Button,
    Wrapper,
    Section,
    FloatIcon,
    ColoredText,
    ColoredTitle,
    MessageContainer
}
