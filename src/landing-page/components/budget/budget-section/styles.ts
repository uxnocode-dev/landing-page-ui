import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.section`
    ${tw`flex flex-col items-center sm:w-full`}
`

const Image = styled.img`
    ${tw`max-w-[164px] mb-10`}
`

const Title = styled.h1`
    ${tw`text-[1.25rem] font-semibold text-center`}
`

const Text = styled.p`
    ${tw`my-8 text-center`}
    color: ${({ theme }) => theme.colors.placeholder};
`

export default {
    Container,
    Image,
    Title,
    Text
}
