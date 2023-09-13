import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'react-toastify/dist/ReactToastify.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'
import 'animate.css'
import { scrollBar } from './mixins/scroll-bar.mixin'

export default createGlobalStyle`
   :root {
    --toastify-color-dark: ${props => props.theme.colors.bgSecondary};
   }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    ${tw`text-base`}
    background: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Poppins', sans-serif;
    font-weight: 400;

    ${({ theme }) => scrollBar('8px', theme.colors.secondary)}

  }

  html {
    scroll-behavior: smooth;
  }

  button {
    ${tw`border-0`}
  }

  #__next {
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text}
  }

  .form-control {
    ${tw`w-full block rounded-xl py-1 px-3 border border-solid`}

    color: ${props => props.theme.colors.text} !important;
    text-rendering: optimizeLegibility !important;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    background: ${({ theme }) => theme.colors.bgSecondary};
    border-color: ${({ theme }) => theme.colors.bgSecondary};
    height: ${({ theme }) => theme.spacing.form_control_height};

    ::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
    }

    &:focus {
        ${tw`outline-none border border-solid`}
        border-color: ${props => props.theme.colors.primary};
    }
  }
`
