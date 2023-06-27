import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Section = styled.article`
    ${tw`py-8`}
    background: ${({ theme }) => theme.colors.primary};
`

const Container = styled(AppContainer)`
    ${tw`grid gap-8 grid-cols-[30% 1fr]`}
`

const View = styled.div``

const Footer = styled(AppContainer)`
    ${tw`py-8 flex items-center justify-end`}
`

const Text = styled.p`
    ${tw`font-light`}
`

const Title = styled.h5`
    ${tw`font-light text-sm`}
`

const TextBold = styled.h5`
    ${tw`font-semibold mb-2 cursor-pointer`}

    &:hover {
        color: ${({ theme }) => theme.colors.secondary};
    }
`

const Image = styled.img`
    ${tw`w-44 mb-6`}
`

const ItemsContainer = styled.article`
    ${tw`grid sm:grid-cols-1!`}
`

const Item = styled.div``

export default {
    Text,
    View,
    Item,
    Title,
    Image,
    Footer,
    Section,
    TextBold,
    Container,
    ItemsContainer
}
