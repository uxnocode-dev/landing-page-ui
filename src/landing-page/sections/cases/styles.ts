import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`py-16! flex flex-col items-center sm:py-6!`}
`

const Content = styled.article`
    ${tw`mt-4 grid grid-cols-5 gap-12 items-center justify-items-center sm:grid-cols-1 sm:mt-8`}
`

const Image = styled.img`
    ${tw`w-4/5 sm:w-2/4`}
`

export default {
    Image,
    Content,
    Container
}
