import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`mb-12 flex flex-col items-center`}
`

const Content = styled.article`
    ${tw`mt-12 grid grid-cols-2 sm:grid-cols-1`}
`

const View = styled.article`
    ${tw`sm:mt-12`}
`

const Text = styled.p`
    ${tw`mb-4`}
`

const ColoredText = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
`

const HighlightText = styled.span`
    ${tw`px-1 mx-0.5 rounded-md`}
    background: ${({ theme }) => theme.colors.primary};
`

export default {
    Text,
    ColoredText,
    HighlightText,
    Container,
    Content,
    View
}
