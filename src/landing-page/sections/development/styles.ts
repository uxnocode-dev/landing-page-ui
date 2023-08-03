import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`py-16! flex flex-col items-center sm:py-6!`}
`

const Card = styled.article`
    ${tw`mt-4 p-2 px-4 rounded-lg flex gap-4`}
    background: ${({ theme }) => theme.colors.bgSecondary};

    > div,
    > img {
        ${tw`w-2/4`}
    }

    &:nth-child(odd) {
        > img {
            ${tw`order-1`}
        }
    }
`

const CardContent = styled.div`
    ${tw`py-8 flex flex-col`}

    > button {
        ${tw`self-start mt-12`}
    }
`

const CardImage = styled.img`
    ${tw`rounded-lg`}
`

const Badge = styled.span`
    ${tw`flex items-center gap-2 rounded-lg p-0.5 px-1.5 self-start font-semibold`}
    color: ${({ theme }) => theme.colors.bgPrimary};
    background: ${({ theme }) => theme.colors.secondary};
`

const Title = styled.h1`
    ${tw`mb-4 mt-2 text-[1.375rem] font-semibold sm:text-lg`}
`

const ItemContainer = styled.div`
    ${tw`flex items-center mb-1 gap-2`}

    > svg {
        color: ${({ theme }) => theme.colors.secondary};
    }
`

const ItemText = styled.p``

export default {
    Card,
    Badge,
    Title,
    ItemText,
    Container,
    CardImage,
    CardContent,
    ItemContainer
}
