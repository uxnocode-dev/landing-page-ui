import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const ContainerWrapper = styled.section`
    ${tw`sm:bg-transparent`}
    background: ${({ theme }) => theme.colors.primary};
`

const Container = styled(AppContainer)`
    ${tw`flex items-stretch z-[1] relative md:bg-transparent sm:flex-col sm:w-[96vw] sm:rounded-lg`}
    box-shadow: 0px -34px 35px -27px rgba(0,0,0,0.75);

    @media (max-width: 640px) {
        background: ${({ theme }) => theme.colors.bgSecondary};
    }

    > img,
    > article {
        ${tw`w-2/4 sm:w-full`}
    }
`

const Content = styled.article`
    ${tw`sm:order-2 pb-8 flex flex-col justify-end sm:pb-0`}

    > button {
        ${tw`sm:order-3 self-start sm:self-center`}
    }
`

const Title = styled.h1`
    ${tw`mb-2 text-[3.438rem] font-semibold sm:hidden`}
`

const Text = styled.h3`
    ${tw`sm:order-2 mb-5 text-lg font-semibold sm:mt-4 sm:text-base sm:text-center`}
`

const Image = styled.img`
    ${tw`sm:order-1`}
`

const Small = styled.small`
    ${tw`hidden order-4 mt-4 text-[70%] self-center sm:flex`}
    color: ${({ theme }) => theme.colors.placeholder};
`

export default {
    ContainerWrapper,
    Container,
    Content,
    Title,
    Small,
    Text,
    Image
}
