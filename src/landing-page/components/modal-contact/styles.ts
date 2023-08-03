import styled from 'styled-components'
import tw from 'twin.macro'

const Header = styled.header`
    ${tw`w-full fixed left-0 top-0 hidden sm:block`}

    background: ${({ theme }) => theme.colors.bgSecondary};
    height: ${({ theme }) => theme.spacing.landing_page_header_height};
`

const Container = styled.section`
    ${tw`w-full relative`}
`

const LogoImage = styled.img`
    ${tw`max-w-[200px]`}
`

const ButtonClose = styled.button`
    ${tw`absolute right-2 top-2 text-lg sm:hidden`}
`

export default {
    ButtonClose,
    LogoImage,
    Container,
    Header
}
