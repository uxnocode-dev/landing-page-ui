import styled from 'styled-components'
import { AppContainer } from '../ts/components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`flex items-center justify-center overflow-hidden`}
`

const FrameContainer = styled.iframe`
    ${tw`w-full min-h-[94vh] rounded-2xl`}
`

export default { Container, FrameContainer }
