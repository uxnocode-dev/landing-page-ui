import { AppContainer } from '@/styles/ts/components'
import { rgba } from 'polished'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`py-16! flex flex-col items-center sm:pb-8!`}
`

const Text = styled.p``

const WebContent = styled.section`
    ${tw`w-11/12 sm:flex sm:overflow-x-auto sm:gap-4 sm:pb-8 sm:items-stretch`}
    scroll-snap-type: x mandatory;
`

const Card = styled.article`
    ${tw`grid grid-cols-[1fr 20% 20%] items-center py-5`}
    ${tw`sm:border-none sm:grid-cols-1 sm:min-w-[78vw] sm:p-6 sm:rounded-[30px]`}
    border-top: 1px solid ${({ theme }) => theme.colors.text};
    scroll-snap-align: center;

    p {
        ${tw`text-[0.94rem] sm:text-center sm:mb-2`}
    }

    &:first-of-type {
        border-top: none;
    }

    @media (max-width: 640px) {
        background: ${({ theme }) => theme.colors.bgSecondary};
    }
`

const Item = styled.div`
    ${tw`flex items-center justify-center sm:justify-between sm:p-2 sm:px-12`}

    > p,
    > img {
        ${tw`hidden sm:block text-[0.85rem]`}
    }

    > svg {
        stroke-width: 2;
    }

    &:first-of-type > svg {
        color: ${({ theme }) => theme.colors.primary};
    }

    &:last-of-type > svg {
        color: ${({ theme }) => theme.colors.red};
    }

    @media (max-width: 640px) {
        &:first-of-type {
            ${tw`pb-3`}
            border-bottom: 1px solid
                ${({ theme }) => rgba(theme.colors.bgPrimary, 0.4)};
        }
    }
`

const Image = styled.img`
    ${tw`w-28`}
`

const Icon = styled.i`
    ${tw`hidden mb-5 sm:block `}
`

const MobileContent = styled.section``

export default {
    Text,
    Card,
    Item,
    Icon,
    Image,
    Container,
    WebContent,
    MobileContent
}
