import React from 'react'
import Styles from './styles'
import LPSectionTitle from '@/landing-page/components/section-title'
import {
    IFaqQuestion,
    IFaqQuestionItem
} from '@/components/@interface/common-question.interface'
import AppAccordion, {
    useAppAccordionRef
} from '@/components/common/app-accordion'
import landingPage from '@/assets/landing-page'
import LPButton from '@/landing-page/components/button'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import AppButton from '@/components/common/@button/app-button'

const LPFaq: React.FC = () => {
    const questions: IFaqQuestion[] = [
        {
            title: `Como vou acompanhar o a construção do meu projeto?`,
            text: `Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora para você acompanhar em tempo real a criação do seu produto!`
        },

        {
            title: `Qual o valor mínimo de investimento em um projeto?`,
            text: `É impossível no nosso modelo de entendimento falar o valor necessário para construir o seu projeto. Nós vamos entender todas as funcionalidades, plataformas, tempo de desenvolvimento e depois disso, vai ser possível chegar ao valor que você quer investir no seu projeto.`
        },

        {
            title: `Qual a diferença entre nativo e web responsivo?`,
            text: `O web app é bem diferente do aplicativo nativo, porque ele não é um aplicativo real, e não estará disponível nas lojas dos sistemas operacionais. Na realidade, o web app é um site desenvolvido de forma pensada para que o conteúdo se adapte a smartphones e tablets assim como a telas de computadores. Já o aplicativo nativo ao contrário, é aquele baixado nas lojas e que permite mais interações com os dispositivos.`
        },

        {
            title: `O que é um MVP?`,
            text: `MVP é a sigla que representa o Mínimo Produto Viável – em inglês, Minimum Viable Product. De um jeito simples, podemos definir o MVP como uma versão enxuta de uma solução, que contém apenas suas funcionalidades básicas. Pode ser um software, serviço, produto físico ou digital.`
        },

        {
            title: `Quais as diferenças entre low-code, no-code e code?`,
            text: `Code (código) é a abordagem tradicional em que os desenvolvedores escrevem manualmente o código fonte. Low-code (baixo código) envolve o uso de ferramentas visuais para acelerar o desenvolvimento com menos codificação manual. No-code (sem código) permite criar aplicativos sem escrever código, usando interfaces intuitivas.`
        }
    ]

    const questionsResult: IFaqQuestionItem[] = questions.map(question => ({
        question,
        ref: useAppAccordionRef() // eslint-disable-line react-hooks/rules-of-hooks
    }))

    const onAcordionOpen = (index: number) => {
        questionsResult.forEach((item, itemIndex) => {
            if (index !== itemIndex) item.ref.current?.close()
        })
    }

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.faq}>
            <LPSectionTitle title="Perguntas frequentes" />

            <Styles.Text>
                Essa sessão foi pensada para ajudar você a entender melhor nosso
                processo. Aqui estão as principais questões.
            </Styles.Text>

            <Styles.Content>
                {questionsResult.map((item, index) => (
                    <AppAccordion
                        key={index}
                        ref={item.ref}
                        enableMobileStyle
                        title={item.question.title}
                        onOpen={() => onAcordionOpen(index)}
                    >
                        {item.question.text}
                    </AppAccordion>
                ))}
            </Styles.Content>

            {/* <Styles.Box>
                <Styles.Image src={landingPage.AvatarFAQ} />

                <Styles.BoxTitle>
                    Você tem uma questão que não está nas perguntas frequentes?
                </Styles.BoxTitle>

                <Styles.BoxText>
                    Nós vamos retornar o mais rápido possível
                </Styles.BoxText>

                <AppButton>Enviar e-mail</AppButton>
            </Styles.Box> */}
        </Styles.Container>
    )
}

export default LPFaq
