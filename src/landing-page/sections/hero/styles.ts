import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`flex items-start sm:flex-col sm:justify-center overflow-x-hidden sm:relative sm:pt-8`}
    top: ${({ theme }) => theme.spacing.landing_page_header_height};
    padding-top: ${({ theme }) =>
        `calc(${theme.spacing.landing_page_header_height} + 1rem)`};
`

const Content = styled.article`
    ${tw`w-2/4 sm:w-full sm:flex sm:flex-col sm:items-center`}
`

const Row = styled.div`
    ${tw`flex gap-8 mb-8 sm:hidden`}
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
    ColoredText,
    Container,
    TextLight,
    Content,
    Text,
    Row
}
