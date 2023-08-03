import styled, { css } from 'styled-components'
import tw from 'twin.macro'

const heroMockAnimation = css`
    animation: hero-mock-animation 6s ease-in-out infinite both;

    @keyframes hero-mock-animation {
        0% {
            box-shadow: 0px 0px 154px 80px
                ${({ theme }) => theme.colors.placeholder};
        }
        50% {
            box-shadow: 0px 0px 400px 140px
                ${({ theme }) => theme.colors.secondary};
        }
        100% {
            box-shadow: 0px 0px 154px 80px
                ${({ theme }) => theme.colors.placeholder};
        }
    }
`

const Container = styled.article`
    ${tw`relative`}
`

const Shadow = styled.div`
    ${heroMockAnimation}
    ${tw`z-[-1] rounded-full w-20 h-20 absolute left-[28%] top-[34%]`}
    background: ${({ theme }) => theme.colors.secondary};
`

const ImageMock = styled.img`
    ${tw`z-10 object-contain`}
`

export default { Container, Shadow, ImageMock }
