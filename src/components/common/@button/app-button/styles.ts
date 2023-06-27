import { AppButton } from '@/styles/ts/components'
import styled, { css } from 'styled-components'
import { AppButtonColorMode } from '.'
import { rgba } from 'polished'
import tw from 'twin.macro'

interface IButtonProps {
    colorMode: AppButtonColorMode
}

const primaryMode = css``

const secondaryMode = css``

const tertiaryMode = css`
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const transparentMode = css`
    background: transparent;
`

const colorModeControl = {
    primary: primaryMode,
    secondary: secondaryMode,
    tertiary: tertiaryMode,
    transparent: transparentMode
}

const Button = styled(AppButton)<IButtonProps>`
    ${tw`flex items-center justify-center font-semibold text-[1.125rem] min-w-[184px] sm:min-w-[auto]`}
    ${({ colorMode }) => colorModeControl[colorMode]}

    &:disabled {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.gray};
    }

    &:has(svg) {
        > i,
        > span {
            ${tw`ml-auto sm:ml-0`}
        }
    }
`

const Text = styled.span`
    ${tw`mr-4 sm:mr-0`}
`

const Icon = styled.i`
    ${tw`p-2 rounded-lg sm:hidden`}
    background: ${({ theme }) => rgba(theme.colors.white, 0.2)};
`

export default { Button, Icon, Text }
