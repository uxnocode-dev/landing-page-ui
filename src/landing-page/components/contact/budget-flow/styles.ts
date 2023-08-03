import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.section`
    ${tw`w-10/12 mx-auto sm:w-full`}
`

const Content = styled(motion.div)``

const Footer = styled.footer`
    ${tw`mt-6 flex items-center justify-between sm:flex-col-reverse`}
`

export default { Container, Content, Footer }
