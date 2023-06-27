import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Header = styled.header`
    ${tw`w-full fixed top-0 left-0 z-10`}
    height: ${({ theme }) => theme.spacing.landing_page_header_height};
    background: #ffffff26;
`

const Container = styled(AppContainer)`
    ${tw`py-0 h-full flex items-center justify-between`}
`

const Image = styled.img`
    ${tw`h-12`}
`

const Group = styled.section`
    ${tw`sm:hidden`}
`

const Link = styled.a`
    ${tw`ml-10 cursor-pointer`}

    &:hover,
    &:last-of-type {
        ${tw`font-semibold`}
        color: ${({ theme }) => theme.colors.secondary};
    }
`

export default {
    Header,
    Container,
    Image,
    Group,
    Link
}
