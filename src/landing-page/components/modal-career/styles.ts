import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.section`
    ${tw`sm:w-full grid grid-cols-2 gap-8 items-stretch relative sm:flex sm:flex-col sm:items-center sm:justify-center`}
`

const AvatarImage = styled.img`
    ${tw`max-h-[500px] w-full rounded-lg object-cover`}
`

const Form = styled.form`
    ${tw`flex flex-col items-center pr-5 sm:pr-0`}

    > div {
        ${tw`w-full`}
    }
`

const Logoimage = styled.img`
    ${tw`max-w-[200px] sm:hidden`}
`

const Text = styled.p`
    ${tw`text-center text-sm my-4`}
`

const ButtonClose = styled.button`
    ${tw`absolute right-2 top-2 text-lg sm:hidden`}
`

export default {
    ButtonClose,
    AvatarImage,
    Container,
    Logoimage,
    Form,
    Text
}
