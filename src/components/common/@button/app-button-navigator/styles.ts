import styled from 'styled-components'
import tw from 'twin.macro'

interface IContainerProps {
    isSingle: boolean
}

const Container = styled.article<IContainerProps>`
    ${tw`p-2 flex items-stretch rounded-2xl`}
    ${({ isSingle }) => (isSingle ? tw`bg-transparent!` : tw``)}

    background: ${({ theme }) => theme.colors.bgSecondary};
`

export default { Container }
