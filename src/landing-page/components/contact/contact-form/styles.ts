import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.section`
    ${tw`grid grid-cols-2 items-stretch sm:flex sm:flex-col sm:items-center`}
`

const Image = styled.img`
    ${tw`object-cover`}
`

const ImageLogo = styled.img`
    ${tw`max-w-[280px] mb-4 sm:my-8 sm:max-w-[140px] sm:hidden`}
`

const Form = styled.form`
    ${tw`flex flex-col items-center w-full sm:mt-2`}
`

const Title = styled.h2`
    ${tw`mb-8 w-4/5 text-center font-semibold text-[1.25rem] sm:w-full sm:text-base`}
`

const Text = styled.p``

const ColoredText = styled.p`
    ${tw`text-center text-sm mb-2`}
    color: ${({ theme }) => theme.colors.secondary};
`

const FieldContainer = styled.div`
    ${tw`w-10/12 flex flex-col mb-3 sm:w-full`}
`

const Bold = styled.b``

const Small = styled.small`
    ${tw`text-[0.75rem]`}
    color: ${({ theme }) => theme.colors.placeholder};
`

export default {
    FieldContainer,
    ColoredText,
    Container,
    ImageLogo,
    Image,
    Title,
    Form,
    Bold,
    Text,
    Small
}
