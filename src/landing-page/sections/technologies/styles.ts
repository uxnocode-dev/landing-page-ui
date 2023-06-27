import { AppContainer } from '@/styles/ts/components'
import { neon } from '@/styles/ts/mixins/neon.mixin'
import styled from 'styled-components'
import tw from 'twin.macro'

const ContainerWrapper = styled.section`
    ${tw`pb-6`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const Container = styled(AppContainer)`
    ${tw`flex flex-col items-center pt-0`}
`

const Text = styled.p`
    ${tw`mb-3 text-sm text-center`}
`

const Content = styled.article`
    ${tw`rounded-2xl shadow-xl w-full p-4 px-8 flex justify-between overflow-x-auto`}
    background: ${({ theme }) => theme.colors.bgPrimary};
`

const Image = styled.img`
    ${tw`w-[40px] z-10 mr-4 object-contain relative transition-all duration-500`}

    &:hover {
        filter: ${({ theme }) => {
            return `drop-shadow(0px 0px 4px ${theme.colors.secondary})`
        }};
    }
`

export default {
    ContainerWrapper,
    Container,
    Content,
    Image,
    Text
}
