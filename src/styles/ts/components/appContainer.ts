import tw from 'twin.macro'
import styled from 'styled-components'

interface AppContainerProps {
    showHeader?: boolean
    preventAnimation?: boolean
}

export const AppContainer = styled.section<AppContainerProps>`
    ${tw`container mx-auto p-4 px-16! sm:px-4!`}

    @media (min-width: 1200px) {
        max-width: 1440px;
    }
`
