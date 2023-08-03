import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const ContainerWrapper = styled.section`
    ${tw`mb-0 sm:mb-12`}
`

const Container = styled(AppContainer)`
    ${tw`p-0!`}
`

const BackgroundWrapper = styled.div`
    ${tw`mt-6`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const Image = styled.img`
    ${tw`w-full`}
`

export default {
    BackgroundWrapper,
    ContainerWrapper,
    Container,
    Image
}
