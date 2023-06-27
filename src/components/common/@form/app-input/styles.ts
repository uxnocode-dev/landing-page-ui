import tw from 'twin.macro'
import styled from 'styled-components'
import { AppFormGroup } from '@/styles/ts/components'
import {
    formControlFill,
    formControlFocus,
    formControlError
} from '@/styles/ts/mixins/form-control.mixin'
import { rgba } from 'polished'

const Container = styled(AppFormGroup)`
    ${tw`relative`}
    ${formControlError()}
`

const Wrapper = styled(AppFormGroup)`
    ${tw`flex items-center rounded-xl px-4 transition-all duration-300 mb-0`}
    background: ${({ theme }) => theme.colors.bgSecondary};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

    ${formControlFill()}
    ${formControlFocus()}
`

const IconContainer = styled.i`
    ${tw`h-full pr-3 flex items-center justify-center text-[1.4rem] transition-all duration-300 relative`}
    color: ${({ theme }) => theme.colors.text};

    &:after {
        ${tw`content-[''] absolute right-0 h-3.5`}
        border-right: 2px solid ${({ theme }) =>
            rgba(theme.colors.placeholder_icon, 0.3)};
    }
`

const Input = styled.input`
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
`
const Label = styled.label`
    ${tw`text-left`}
`
const Span = styled.span`
    ${tw`w-full text-left left-0`}
`

export default {
    IconContainer,
    Container,
    Wrapper,
    Input,
    Label,
    Span
}
