import tw from 'twin.macro'
import styled, { css } from 'styled-components'

const heroMockBGAnimation = (size: string) => css`
    animation: hero-mock-bg-animation 6s ease-in-out infinite both;

    @keyframes hero-mock-bg-animation {
        0% {
            box-shadow: 0px 0px 154px 80px
                ${({ theme }) => theme.colors.placeholder};
        }
        50% {
            box-shadow: ${({ theme }) =>
                `0px 0px 154px ${size} ${theme.colors.secondary}`};
        }
        100% {
            box-shadow: 0px 0px 154px 80px
                ${({ theme }) => theme.colors.placeholder};
        }
    }
`

const heroMockAnimation = css`
    animation: hero-mock-animation 6s ease-in-out infinite both;

    @keyframes hero-mock-animation {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-0.5rem);
        }
        100% {
            transform: translateY(0);
        }
    }
`

const Container = styled.article`
    ${tw`relative h-[544px] sm:h-[480px]`}

    &.animate__animated.animate__fadeIn {
        --animate-duration: 4s;
        --animate-delay: 0.9s;
    }
`

interface IShadowProps {
    isMobile: boolean
}
const Shadow = styled.div<IShadowProps>`
    ${({ isMobile }) => heroMockBGAnimation(isMobile ? '120px' : '180px')}
    ${tw`rounded-full absolute left-[40%] top-[40%] sm:top-2/4 z-[-1]`}
    background: ${({ theme }) => theme.colors.secondary};
`

interface IImageProps {
    src: string
}
const Image = styled.figure<IImageProps>`
    ${heroMockAnimation}
    ${tw`w-[400px] h-[100%] sm:absolute sm:w-[90vw]`}

    background: ${({ src }) => `url("${src}")`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
`

export default { Container, Shadow, Image }
