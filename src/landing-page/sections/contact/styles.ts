import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`py-16! flex flex-col items-center sm:pt-0!`}
`

const Content = styled.article`
    ${tw`p-4 w-full flex flex-col items-center`}
    border-radius: 40px;
    border: 5px solid rgba(255, 255, 255, 0.08);
`

export default { Container, Content }
