import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`mb-12 flex flex-col items-center`}
`

const Content = styled.article`
    ${tw`mt-12 grid grid-cols-[41% 1fr] sm:grid-cols-1`}
`

const View = styled.article`
    ${tw`sm:mt-12 sm:flex sm:flex-col sm:items-center`}
`

const Title = styled.h1`
    ${tw`hidden font-medium text-center text-xl mb-6 tracking-[-1.763px] sm:flex`}
`

const Text = styled.p`
    ${tw`mb-4 sm:text-center`}
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
    View,
    Title,
    Content,
    Container,
    ColoredText,
    HighlightText
}
