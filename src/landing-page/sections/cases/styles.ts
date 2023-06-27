import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`py-16! flex flex-col items-center sm:py-6!`}
`

const Text = styled.p``

const Card = styled.article``

const Image = styled.img``

const CardTitle = styled.h6`
    ${tw`text-left mt-4 mb-2 text-sm`}
    color: ${({ theme }) => theme.colors.secondary};
`

const CardBody = styled.p`
    ${tw`flex items-center justify-between`}

    svg {
        color: ${({ theme }) => theme.colors.secondary};
    }
`

export default {
    Text,
    Card,
    Image,
    Container,
    CardTitle,
    CardBody
}
