import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const ContainerWrapper = styled.section`
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const Container = styled(AppContainer)`
    ${tw`py-16! flex flex-col items-center`}
`

const Content = styled.div`
    ${tw`mt-8 w-full`}
`

const Text = styled.p``

const Card = styled.article`
    ${tw`flex flex-col items-center z-10`}

    * {
        ${tw`transition-all duration-500`}
    }

    &:hover {
        > img {
            transform: scale(0.94);
        }

        > h5 {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
`

const Image = styled.img`
    ${tw`rounded-md`}
`

const Title = styled.h5`
    ${tw`mt-1 mb-0.5 text-sm font-semibold text-center`}
`

const CardText = styled.p`
    ${tw`text-[0.75rem] font-light text-center`}
    color: rgba(255, 255, 255, 0.5);
`

export default {
    ContainerWrapper,
    Container,
    Content,
    Text,
    Card,
    Image,
    Title,
    CardText
}
