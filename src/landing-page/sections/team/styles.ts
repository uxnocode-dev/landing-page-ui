import { AppContainer } from '@/styles/ts/components'
import { neon } from '@/styles/ts/mixins/neon.mixin'
import styled from 'styled-components'
import tw from 'twin.macro'

const ContainerWrapper = styled.section``

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
        > figure {
            > img {
                transform: scale(0.94);
            }

            > a {
                transform: scale(1.1);
                ${({ theme }) => neon(theme.colors.secondary)}
            }
        }

        > h5 {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
`

const Image = styled.img`
    ${tw`rounded-md w-24 h-24 object-cover`}
`

const Title = styled.h5`
    ${tw`mt-1 mb-0.5 text-sm font-semibold text-center`}
`

const CardImageContainer = styled.figure`
    ${tw`relative`}
`

const CardText = styled.p`
    ${tw`text-[0.75rem] font-light text-center`}
    color: rgba(255, 255, 255, 0.5);
`

const CardTextAbbr = styled.p`
    ${tw`text-[0.75rem] font-light text-center`}
    color: rgba(255, 255, 255, 0.80);
`

const LinkedinLink = styled.a`
    ${tw`absolute bottom-1 right-1 text-lg`}
`

export default {
    CardImageContainer,
    ContainerWrapper,
    CardTextAbbr,
    LinkedinLink,
    Container,
    Content,
    Text,
    Card,
    Image,
    Title,
    CardText
}
