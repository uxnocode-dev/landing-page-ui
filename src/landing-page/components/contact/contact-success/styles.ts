import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.section`
    ${tw`grid grid-cols-2 items-stretch sm:flex sm:flex-col sm:items-center`}
`

const Image = styled.img``

const ImageLogo = styled.img`
    ${tw`max-w-[280px] mb-8 sm:hidden`}
`

const ImageSuccess = styled.img`
    ${tw`max-w-[280px] mb-8`}
`

const Section = styled.section`
    ${tw`flex flex-col items-center w-full `}
`

const Title = styled.h2`
    ${tw`text-center font-semibold text-[1.25rem]`}
`

const Text = styled.p`
    ${tw`text-center text-sm my-4 font-light w-10/12`}
    color: ${({ theme }) => theme.colors.placeholder};
`

export default {
    ImageSuccess,
    Container,
    ImageLogo,
    Section,
    Image,
    Title,
    Text
}
