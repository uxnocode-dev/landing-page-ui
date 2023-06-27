import tw from 'twin.macro'
import styled, { css } from 'styled-components'

const mobileStyle = css`
    ${tw`border-none p-8! rounded-2xl! relative`}
    background: ${({ theme }) => theme.colors.bgSecondary};

    > header {
        ${tw`w-full relative`}

        > h4 {
            ${tw`w-full text-center pointer-events-none`}
        }

        > button {
            ${tw`absolute top-[-4.2rem] left-[-2.6rem] w-16 h-16 rounded-[24px]`}
            background: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.white} !important;
        }
    }

    > section {
        ${tw`text-center`}
    }
`

interface IContainerProps {
    isOpen?: boolean
    enableMobileStyle?: boolean
}
const Container = styled.article<IContainerProps>`
    ${tw`rounded-lg p-4`}
    background: ${({ isOpen }) => (isOpen ? 'transparent' : 'transparent')};
    ${({ enableMobileStyle }) => (enableMobileStyle ? mobileStyle : ``)}
`

const Header = styled.header`
    ${tw`w-full flex items-center justify-between`}
`

const Title = styled.h4`
    ${tw`cursor-pointer font-semibold`}
`

const Button = styled.button`
    ${tw`text-[1.6rem] flex items-center justify-center`}
    color: ${({ theme }) => theme.colors.gray};
`

const Content = styled.section`
    ${tw`py-4 text-sm`}
`

export default {
    Container,
    Header,
    Title,
    Button,
    Content
}
