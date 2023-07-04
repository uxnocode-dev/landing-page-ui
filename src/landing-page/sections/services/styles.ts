import { AppButton, AppContainer } from '@/styles/ts/components'
import { neon } from '@/styles/ts/mixins/neon.mixin'
import styled from 'styled-components'
import tw from 'twin.macro'

const ContainerWrapper = styled.section`
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const Container = styled(AppContainer)`
    ${tw`flex flex-col items-center pt-12`}
`

const Text = styled.p``

const Content = styled.section`
    ${tw`w-full mt-12 grid grid-cols-5 gap-14 sm:flex sm:overflow-x-auto sm:gap-8 sm:mt-0 sm:pt-12 sm:pb-8 sm:items-stretch sm:mb-4`}
    scroll-snap-type: x mandatory;
`

const Card = styled.article`
    ${tw`sm:min-w-[60vw] rounded-lg cursor-default transition-transform duration-700 relative`}
    scroll-snap-align: center;

    &.mobile {
        ${tw`p-4 px-6 rounded-2xl`}
        background: ${({ theme }) => theme.colors.bgPrimary};
        border: 2px solid ${({ theme }) => theme.colors.primary};

        > figure {
            ${tw`w-16 h-16 rounded-2xl shadow-xl absolute top-[-1rem] left-[-0.6rem] z-[2]`}
            background: ${({ theme }) => theme.colors.bgSecondary};
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        }
    }
`

const Title = styled.h3`
    ${tw`mb-5 text-lg font-bold sm:mt-12`}
`

const Icon = styled.figure`
    ${tw`w-12 h-12 mb-4 rounded-full flex items-center justify-center z-[0]`}
    ${({ theme }) => neon(theme.colors.primary)}

    > svg {
        ${tw`stroke-2`}
        color: ${({ theme }) => theme.colors.primary};
    }
`

const TopcsContainer = styled.ul``

const Topic = styled.li`
    ${tw`mb-3.5`}
`

const Button = styled(AppButton)`
    ${tw`my-6`}
`

const HandIcon = styled.i`
    ${tw`hidden sm:block `}
`

export default {
    ContainerWrapper,
    TopcsContainer,
    Container,
    HandIcon,
    Content,
    Button,
    Topic,
    Title,
    Text,
    Card,
    Icon
}
