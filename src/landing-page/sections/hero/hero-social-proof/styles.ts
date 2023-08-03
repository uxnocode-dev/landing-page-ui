import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`px-0! grid grid-cols-[40% 1fr]`}

    > article {
        ${tw`p-8`}
    }
`

const ClientContainer = styled.article`
    ${tw`flex flex-col items-center`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const ClientBadge = styled.span`
    ${tw`flex items-center gap-1 rounded-full py-0.5 px-1.5 text-sm font-light`}
    color: ${({ theme }) => theme.colors.placeholder};
    border: 1px dotted ${({ theme }) => theme.colors.placeholder};
`

const ClientTitle = styled.h1`
    ${tw`my-3 font-bold text-[2.75rem] sm:text-lg`}
    color: ${({ theme }) => theme.colors.secondary};
`

const ClientText = styled.p`
    ${tw`mb-4 text-sm font-light text-center`}
    white-space: pre-line;
`

const ClientImage = styled.img`
    ${tw`h-16`}
`

const MarketContainer = styled.article`
    ${tw`flex items-center gap-4`}
    background: ${({ theme }) => theme.colors.primary};
`

const MarketContent = styled.div``

const MarketTitle = styled.h1`
    ${tw`font-bold text-[2.75rem] sm:text-lg`}
`

const MarketBadge = styled.span`
    ${tw`text-sm rounded-md py-1 px-1.5`}
    background: rgba(255, 255, 255, 0.20);
`

const MarketText = styled.p`
    ${tw`w-[74%]`}
`

const MarketImage = styled.img`
    ${tw`w-4/12 object-contain`}
`

export default {
    Container,
    ClientText,
    ClientTitle,
    ClientImage,
    ClientBadge,
    ClientContainer,

    MarketText,
    MarketTitle,
    MarketBadge,
    MarketImage,
    MarketContent,
    MarketContainer
}
