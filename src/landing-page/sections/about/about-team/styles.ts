import tw from 'twin.macro'
import { rgba } from 'polished'
import styled, { css } from 'styled-components'

const backgroundAnimation = css`
    animation: background-animation 4s ease-in-out infinite both;

    @keyframes background-animation {
        0% {
            border-width: 40px;
            outline-width: 40px;
            transform: scale(1);
        }
        50% {
            border-width: 30px;
            outline-width: 30px;
            transform: scale(0.94);
        }
        100% {
            border-width: 40px;
            outline-width: 40px;
            transform: scale(1);
        }
    }
`

const cardAnimation = (index: number) => {
    return css`
        animation: card-animation 4s ease-in-out infinite both;
        animation-delay: calc(500ms * ${index});
        @keyframes card-animation {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(0.92);
            }
            100% {
                transform: scale(1);
            }
        }
    `
}

const cardControl = css`
    &:nth-child(1) {
        ${tw`top-7 left-[calc(50% + 2rem)]`}

        > img {
            ${tw`w-28 h-28`}
            ${cardAnimation(1)}
        }
    }
    &:nth-child(2) {
        ${tw`top-[5rem] right-[calc(50% + 2rem)]`}

        > img {
            ${tw`w-24 h-24`}
            ${cardAnimation(2)}
        }
    }
    &:nth-child(3) {
        ${tw`bottom-16 left-[calc(50% + 3.5rem)]`}

        > img {
            ${tw`w-20 h-20`}
            ${cardAnimation(3)}
        }
    }
    /* &:nth-child(4) {
        ${tw`bottom-10 right-[calc(50% + 4rem)]`}

        > img {
            ${tw`w-16 h-16`}
            ${cardAnimation(4)}
        }
    } */

    &:nth-child(4) {
        ${tw`bottom-14 p-3 w-16 h-16 right-[calc(50% + 3rem)] rounded-full`}
        background: ${({ theme }) => theme.colors.primary};
        border: 3px solid ${({ theme }) => theme.colors.placeholder};
        ${cardAnimation(4)}

        > img {
            ${tw`w-14 h-14 object-contain border-0`}
        }
    }
`

const Container = styled.article`
    ${tw`flex items-center justify-center relative h-[360px]`}
`

const Background = styled.div`
    ${backgroundAnimation}
    ${tw`w-56 h-56 opacity-30 rounded-full absolute sm:w-80 sm:h-80`}
    background: ${({ theme }) => rgba(theme.colors.placeholder, 0.4)};

    border-style: solid;
    border-color: ${({ theme }) => rgba(theme.colors.white, 0.2)};

    box-shadow: 0px 0px 0px 40px ${({ theme }) => rgba(theme.colors.white, 0.2)},
        0px 0px 0px 80px ${({ theme }) => rgba(theme.colors.white, 0.1)};
`

const Content = styled.article``

const Card = styled.article`
    ${cardControl}
    ${tw`absolute flex flex-col items-center`}

    > img {
        ${tw`object-cover`}
    }
`

const Image = styled.img`
    ${tw`rounded-full `}
    border: 3px solid ${({ theme }) => theme.colors.placeholder};
`

const Title = styled.h5`
    ${tw`text-sm`}
`

const LogoContainer = styled.figure`
    ${tw`absolute left-[calc(50% - 2.2rem)] bottom-[8rem] w-20 h-20 p-4 rounded-full flex items-center justify-center`}
    background: ${({ theme }) => theme.colors.primary};
    border: 3px solid ${({ theme }) => theme.colors.placeholder};
`

const CenterImage = styled.img``

export default {
    Card,
    Image,
    Title,
    Content,
    Container,
    Background,
    CenterImage,
    LogoContainer
}
