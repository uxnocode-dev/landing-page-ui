import landingPage from '@/assets/landing-page'
import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const ContainerWrapper = styled.section`
    background: ${() => `url("${landingPage.HeroPattern}")`};
    background-size: 100%;
`

const Container = styled(AppContainer)`
    ${tw`flex items-start sm:flex-col sm:justify-center overflow-hidden sm:relative sm:pt-8`}
    top: ${({ theme }) => theme.spacing.landing_page_header_height};
    padding-top: ${({ theme }) =>
        `calc(${theme.spacing.landing_page_header_height} + 1rem)`};
`

const Content = styled.article`
    ${tw`w-2/4 relative sm:w-full sm:flex sm:flex-col sm:items-center`}

    &::before {
        ${tw`content-[""] h-[560px] w-0.5 absolute left-[-3rem] sm:hidden`}
        background: ${({ theme }) => theme.colors.white};
    }
`

const PenIcon = styled.i`
    ${tw`absolute text-lg top-[20%] left-[-2.4rem] sm:hidden`}

    &::before {
        ${tw`content-[""] h-4 w-4 rounded-full absolute top-[-0.8rem] left-[-1.05rem]`}
        outline: 6px solid ${({ theme }) => theme.colors.bgPrimary};
        background: ${({ theme }) => theme.colors.white};
    }

    animation: hero-pen-animation 8s ease-in-out infinite both;

    @keyframes hero-pen-animation {
        0% {
            top: 20%;
        }
        50% {
            top: 40%;
        }
        100% {
            top: 20%;
        }
    }
`

const Row = styled.div`
    ${tw`flex gap-8 mb-8 sm:hidden`}

    i {
        color: ${({ theme }) => theme.colors.secondary};

        &:hover {
            color: ${({ theme }) => theme.colors.white};
        }
    }
`

const Text = styled.p`
    ${tw`sm:text-center`}
`

const TextLight = styled.p`
    ${tw`font-light`}
`

const ColoredText = styled.span`
    ${tw`font-bold`}
    color: ${({ theme }) => theme.colors.secondary};
`

export default {
    ContainerWrapper,
    ColoredText,
    Container,
    TextLight,
    Content,
    PenIcon,
    Text,
    Row
}
