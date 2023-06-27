import { AppButton } from '@/styles/ts/components'
import styled from 'styled-components'
import { rgba } from 'polished'
import tw from 'twin.macro'

const Button = styled(AppButton)`
    ${tw`flex items-center justify-center font-semibold text-[1.125rem] min-w-[184px]`}

    &:disabled {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.gray};
    }
`

const Text = styled.span`
    ${tw`ml-auto mr-4`}
`

const Icon = styled.i`
    ${tw`p-2 rounded-lg ml-auto`}
    background: ${({ theme }) => rgba(theme.colors.white, 0.2)};
`

export default { Button, Icon, Text }
