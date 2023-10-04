import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`py-16! px-0! flex flex-col items-center`}
`

const Content = styled.div`
    ${tw`mt-8 w-full`}
`

const Card = styled.article`
    ${tw`mr-6  flex flex-col items-center`}

    * {
        ${tw`transition-all duration-500`}
    }

    &:hover {
        > img {
            transform: scale(0.96);
        }
    }
`

const Image = styled.img`
    ${tw`w-72 mb-6 rounded-lg`}
`

const Title = styled.p``

export default {
    Container,
    Content,
    Image,
    Card,
    Title
}
