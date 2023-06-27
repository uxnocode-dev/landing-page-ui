import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.section`
    ${tw`grid grid-cols-2 items-stretch sm:flex sm:flex-col sm:items-center`}
`

const Image = styled.img``

const ImageLogo = styled.img`
    ${tw`max-w-[280px] mb-8 sm:my-8 sm:max-w-[140px]`}
`

const Form = styled.form`
    ${tw`flex flex-col items-center w-full relative right-4 sm:right-0`}
`

const Title = styled.h2`
    ${tw`text-center font-semibold text-[1.25rem]`}
`

const Text = styled.p`
    ${tw`text-center text-sm my-4 font-light w-10/12 sm:w-full`}
    color: ${({ theme }) => theme.colors.placeholder};
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
    Container,
    ImageLogo,
    Image,
    Title,
    Form,
    Bold,
    Text,
    Small
}
