import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`mb-8 flex flex-col items-center`}
`

const Card = styled.article`
    ${tw`p-4 h-full rounded-md flex flex-col`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const ArrowGroup = styled.div`
    ${tw`hidden mt-4 sm:flex gap-2 items-center justify-center`}
    color: ${({ theme }) => theme.colors.secondary};
`

const Text = styled.p`
    ${tw`text-sm mb-16`}
`

const Footer = styled.footer``

const AuthorContainer = styled.section`
    ${tw`flex gap-2 mb-2 items-start`}
`

const AuthorImage = styled.img`
    ${tw`w-9 h-9 rounded-full`}
`

const AuthorName = styled.h5`
    ${tw`text-sm `}
`

const AuthorRole = styled.h6`
    ${tw`text-[0.74rem]`}
    color: ${({ theme }) => theme.colors.placeholder};
`

const View = styled.div``

const BoldText = styled.h5`
    ${tw`font-semibold`}
    color: ${({ theme }) => theme.colors.secondary};
`

const StarGroup = styled.section`
    ${tw`mb-6 flex gap-1`}
    color: ${({ theme }) => theme.colors.yellow};
`

export default {
    View,
    Card,
    Text,
    Footer,
    BoldText,
    Container,
    StarGroup,
    AuthorRole,
    ArrowGroup,
    AuthorName,
    AuthorImage,
    AuthorContainer
}
