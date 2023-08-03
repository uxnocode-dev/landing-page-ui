import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`py-16! flex flex-col items-center sm:py-6!`}
`

const Card = styled.article`
    ${tw`mt-4 p-2 px-4 rounded-lg flex gap-4 sm:flex-col sm:p-0`}
    background: ${({ theme }) => theme.colors.bgSecondary};

    > div,
    > img {
        ${tw`w-2/4 sm:w-full`}
    }

    &:nth-child(odd) {
        > img {
            ${tw`order-1`}
        }

        > div {
            ${tw`sm:order-1`}
        }
    }
`

const CardContent = styled.div`
    ${tw`py-8 flex flex-col sm:p-4`}

    > button {
        ${tw`order-3 self-start my-6 sm:order-2 sm:self-center sm:my-6`}
    }
`

const CardImage = styled.img`
    ${tw`rounded-lg object-cover`}
`

const Badge = styled.span`
    ${tw`order-1 flex items-center gap-2 rounded-lg p-0.5 px-1.5 self-start font-semibold`}
    color: ${({ theme }) => theme.colors.bgPrimary};
    background: ${({ theme }) => theme.colors.secondary};
`

const Title = styled.h1`
    ${tw`order-2 mb-4 mt-2 text-[1.375rem] font-semibold sm:text-[1.2rem] sm:font-medium sm:mb-0`}
`

const ItemsGroup = styled.article`
    ${tw`order-4`}
`

const ItemContainer = styled.div`
    ${tw`flex items-center mb-1 gap-2 sm:mb-2`}

    > svg {
        color: ${({ theme }) => theme.colors.secondary};
    }
`

const ItemText = styled.p`
    ${tw`sm:text-sm`}
`

const ActionButton = styled.a`
    ${tw`hidden items-center justify-end gap-2 w-32 self-end order-6 sm:flex`}

    > svg {
        color: ${({ theme }) => theme.colors.secondary};
    }
`

export default {
    Card,
    Badge,
    Title,
    ItemText,
    Container,
    CardImage,
    ItemsGroup,
    CardContent,
    ActionButton,
    ItemContainer
}
