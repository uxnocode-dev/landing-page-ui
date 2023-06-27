import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.article`
    ${tw`flex flex-col`}

    &:has(button) {
        label {
            ${tw`px-9`}
        }
    }
`

const Group = styled.div`
    ${tw`flex items-center`}
`

const Label = styled.label`
    ${tw`text-sm px-1 mt-2 font-light flex`}
    color: ${({ theme }) => theme.colors.placeholder};
`

interface ItemProps {
    active: boolean
}
const Item = styled.span<ItemProps>`
    ${tw`w-8 h-1.5 rounded-md shadow-md mx-1 cursor-pointer transition-all duration-300`}
    background: ${({ active, theme }) =>
        active ? theme.colors.primary : '#12181F'};

    &:hover {
        background: ${({ theme }) => theme.colors.secondary};
    }
`

const Button = styled.button`
    ${tw`mx-4 transition-all duration-300`}

    &:first-of-type {
        ${tw`ml-0`}
    }

    &:last-of-type {
        ${tw`mr-0`}
    }

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`

export default { Container, Item, Group, Button, Label }
