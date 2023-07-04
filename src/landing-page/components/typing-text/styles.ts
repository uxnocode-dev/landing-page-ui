import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.article`
    br {
        ${tw`sm:hidden`}
    }

    span {
        ${tw`sm:mb-0`}
    }
`

const Line = styled.br``

export default { Container, Line }
