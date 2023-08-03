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
`
