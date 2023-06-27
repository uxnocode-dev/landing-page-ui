import styled from 'styled-components'
import { rgba } from 'polished'
import tw from 'twin.macro'
import { fadeIn } from '@/styles/animation'

export type ShadowModeType = 'primary' | 'secondary'

const Container = styled.section`
    ${tw`flex justify-center items-center relative font-bold`}
`

interface IShadowTitleProps {
    mode: ShadowModeType
}
const ShadowTitle = styled.h1.attrs(fadeIn.down)<IShadowTitleProps>`
    ${tw`absolute bottom-0.5 z-[0] text-xl text-[4.063rem] whitespace-nowrap select-none sm:text-lg`}
    color: ${({ theme, mode }) => {
        const colors = {
            primary: theme.colors.bgSecondary,
            secondary: theme.colors.bgPrimary
        }

        return rgba(colors[mode], 0.28)
    }};
`

const Title = styled.h2.attrs(fadeIn.down)`
    ${tw`text-xl z-[1] select-none text-center sm:text-[1.125rem]`}
`

export default {
    Title,
    Container,
    ShadowTitle
}
