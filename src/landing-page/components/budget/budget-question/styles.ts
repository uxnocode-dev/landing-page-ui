import { neon } from '@/styles/ts/mixins/neon.mixin'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.article`
    ${tw`w-full flex flex-col items-center`}
`

const Title = styled.h1`
    ${tw`text-[1.25rem] font-semibold text-center mb-4`}
    color: ${({ theme }) => theme.colors.secondary};
`

const Content = styled.section`
    ${tw`w-full grid gap-10 grid-cols-3 items-stretch sm:grid-cols-1!`}
`

interface ICardProps {
    isActive: boolean
}
const Card = styled.div<ICardProps>`
    ${tw`flex min-h-[258px] p-6 items-center justify-center text-center rounded-xl cursor-pointer transition-all duration-500`}
    ${tw`sm:min-h-[auto]`}

    background: ${({ theme }) => theme.colors.bgSecondary};
    border: ${({ theme, isActive }) =>
        !isActive ? `none` : `4px solid ${theme.colors.primary}`};

    &:hover {
        ${tw`font-semibold`}
        transform: scale(0.92);
        color: ${({ theme }) => theme.colors.primary};
        ${({ theme }) => neon(theme.colors.primary)}
    }
`

export default { Container, Content, Title, Card }
