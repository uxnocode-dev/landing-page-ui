import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.section`
    ${tw`grid grid-cols-2 items-stretch sm:flex sm:flex-col sm:items-center sm:justify-center`}
`

const AvatarImage = styled.img`
    ${tw`max-h-[500px] object-contain`}
`

const Form = styled.form`
    ${tw`flex flex-col items-center`}

    > div {
        ${tw`w-full`}

        &:first-of-type {
            /* ${tw`mt-auto`} */
        }
    }
`

const Logoimage = styled.img`
    ${tw`max-w-[200px] sm:hidden`}
`

const Title = styled.h3`
    ${tw`font-bold text-[1.25rem] text-center my-3`}
`

const Text = styled.p`
    ${tw`text-center text-sm mb-2`}
`

export default {
    AvatarImage,
    Container,
    Logoimage,
    Title,
    Form,
    Text
}
