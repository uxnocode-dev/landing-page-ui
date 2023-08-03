import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const ContainerWrapper = styled.section`
    background: ${({ theme }) => theme.colors.primary};
`

const Container = styled(AppContainer)`
    ${tw`flex items-stretch`}

    > img,
    > article {
        ${tw`w-2/4`}
    }
`

const Content = styled.article`
    ${tw`pb-8 flex flex-col justify-end`}

    > button {
        ${tw`self-start`}
    }
`

const Title = styled.h1`
    ${tw`mb-2 text-[3.438rem] font-semibold`}
`

const Text = styled.h3`
    ${tw`mb-5 text-lg font-semibold`}
`

const Image = styled.img``

export default {
    ContainerWrapper,
    Container,
    Content,
    Title,
    Text,
    Image
}
