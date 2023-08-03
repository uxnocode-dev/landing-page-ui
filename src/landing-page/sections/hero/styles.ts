import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`flex items-start`}
    padding-top: ${({ theme }) =>
        `calc(${theme.spacing.landing_page_header_height} + 1rem)`};
`

const Content = styled.article`
    ${tw`w-2/4`}
`

const Image = styled.img`
    ${tw`w-2/4 object-contain`}
    border: 1px solid red;
`

const Row = styled.div`
    ${tw`flex gap-8 mb-8`}
`

const Text = styled.p``

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
    Image,
    Text,
    Row
}
