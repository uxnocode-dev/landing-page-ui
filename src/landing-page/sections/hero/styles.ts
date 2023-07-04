import { AppContainer } from '@/styles/ts/components'
import { rgba } from 'polished'
import styled from 'styled-components'
import tw from 'twin.macro'

interface IContainerWrapperProps {
    bgImage: string
}
const ContainerWrapper = styled.section<IContainerWrapperProps>`
    padding-top: ${({ theme }) => theme.spacing.landing_page_header_height};
    background-image: ${({ bgImage }) => `url(${bgImage})`};
    background-position: center;
    background-size: 100%;
    min-height: 900px;

    animation: zoom 8s infinite;

    box-shadow: inset -700px -700px 300px 700px
        ${({ theme }) => rgba(theme.colors.bgPrimary, 0.2)};

    ${tw`sm:bg-cover!`}

    @media (max-width: 640px) {
        animation: none !important;
    }

    @keyframes zoom {
        0% {
            background-size: 100%;
        }
        50% {
            background-size: 101%;
        }
        100% {
            background-size: 100%;
        }
    }
`

const Container = styled(AppContainer)`
    ${tw`flex flex-col items-center pt-14 relative sm:pt-10`}
`

const Title = styled.h1`
    ${tw`font-bold text-center text-[2.75rem] mb-6 sm:text-lg`}
`

const Text = styled.p`
    white-space: pre;
    ${tw`text-center w-[78%] mb-4 sm:w-full md:whitespace-normal`}
`

const ColoredText = styled.span`
    ${tw`font-bold`}
    color: ${({ theme }) => theme.colors.secondary};
`

export default {
    ContainerWrapper,
    ColoredText,
    Container,
    Title,
    Text
}
