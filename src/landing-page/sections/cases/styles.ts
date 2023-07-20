import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`py-16! flex flex-col items-center sm:py-6!`}
`

const Text = styled.p``

const Card = styled.article``

interface IImageProps {
    imageURL: string
}
const Image = styled.figure<IImageProps>`
    ${tw`w-[30vw] h-[236px] rounded-md bg-center transition-all duration-500 sm:w-full sm:h-[200px]`}
    background-image: ${({ imageURL }) => `url(${imageURL})`};
    background-size: 100%;

    &:hover {
        background-size: 110%;
    }
`

const CardTitle = styled.h6`
    ${tw`text-left mt-4 mb-2 text-sm`}
    color: ${({ theme }) => theme.colors.secondary};
`

const CardBody = styled.p`
    ${tw`flex items-center justify-between`}

    svg {
        ${tw`hidden`}
        color: ${({ theme }) => theme.colors.secondary};
    }
`

const AuthorContainer = styled.section`
    ${tw`my-4 flex gap-3`}
`

const AuthorImage = styled.img`
    ${tw`w-6 h-6 rounded-full object-cover`}
`

const AuthorName = styled.h5`
    ${tw`text-sm font-semibold`}
`

const AuthorTestimony = styled.p``

export default {
    Text,
    Card,
    Image,
    Container,
    CardTitle,
    CardBody,
    AuthorImage,
    AuthorName,
    AuthorContainer,
    AuthorTestimony
}
