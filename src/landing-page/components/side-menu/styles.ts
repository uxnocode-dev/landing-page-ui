import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton } from '@/styles/ts/components'

const Container = styled.section`
    ${tw`flex flex-col py-8`}
`

const Title = styled.h4`
    ${tw`self-center font-semibold text-lg`}
`

const Group = styled.article`
    ${tw`w-full flex flex-col mt-16`}
`

const Item = styled.a`
    ${tw`mb-4 text-center text-[1.125rem] font-semibold cursor-pointer`}

    &:last-of-type {
        ${tw`mb-0`}
    }
`

const Button = styled(AppButton)`
    ${tw`mt-auto`}
`

export default { Container, Group, Button, Item, Title }
