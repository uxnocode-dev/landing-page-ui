import { fadeIn } from '@/styles/animation'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.section`
    ${tw`w-full flex flex-col items-center`}
`

const Content = styled.div`
    ${tw`flex gap-5 w-full sm:overflow-x-auto sm:pb-8 sm:items-stretch`}
    scroll-snap-type: x mandatory;
`

const Item = styled.div.attrs(fadeIn.default)`
    ${tw`sm:min-w-[78vw]`}
    scroll-snap-align: center;
`

export default { Container, Content, Item }
