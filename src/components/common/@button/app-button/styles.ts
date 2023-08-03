import { AppButton } from '@/styles/ts/components'
import styled, { css } from 'styled-components'
import { AppButtonColorMode } from '.'
import { rgba } from 'polished'
import tw from 'twin.macro'
import { neon } from '@/styles/ts/mixins/neon.mixin'

interface IButtonProps {
    colorMode: AppButtonColorMode
}

const whiteMode = css`
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
`

const primaryMode = css``

const secondaryMode = css``

const tertiaryMode = css`
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const transparentMode = css`
    background: transparent;
`

const colorModeControl = {
    white: whiteMode,
    primary: primaryMode,
    secondary: secondaryMode,
    tertiary: tertiaryMode,
    transparent: transparentMode
}

const Button = styled(AppButton)<IButtonProps>`
    ${tw`flex items-center justify-center font-semibold text-[1.125rem] min-w-[184px] sm:min-w-[auto]`}
    ${({ colorMode }) => colorModeControl[colorMode]}

    * {
        ${tw`transition-all duration-500`}
    }

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

    &.animation-hover {
        &:hover {
            > span {
                transform: scale(0.98);
            }

            > i {
                transform: scale(1.1);

                > svg {
                    transform: scale(0.84);
                }
            }
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
