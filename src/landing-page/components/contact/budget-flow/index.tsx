import Styles from './styles'
import analytics from './analytics'
import React, { useEffect, useState } from 'react'
import { useWindowSize } from '@/hooks/window-size.hook'
import AppPaginator from '@/components/common/app-paginator'
import { IPaginatorConfig } from '@/interfaces/_paginator.interface'
import { BUDGET_SECTION_DATA } from '@/landing-page/data/budget.data'
import AppButtonNavigator from '@/components/common/@button/app-button-navigator'
import LPBudgetSection, {
    IBudgetSectionAnswer
} from '../../budget/budget-section'

const animation = {
    hide: { opacity: 0 },
    show: { opacity: 1 }
}

interface ILPBudgetFlowProps {
    onSubmit: (model: IBudgetSectionAnswer[]) => void
}

const LPBudgetFlow: React.FC<ILPBudgetFlowProps> = ({ onSubmit }) => {
    const { isMobile } = useWindowSize()
    const [currentPageGA, setCurrentPageGA] = useState(0)
    const [shouldAnimate, setShouldAnimate] = useState(false)
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
    const [answers, setAnswers] = useState<IBudgetSectionAnswer[]>([])
    const [pagination, setPagination] = useState<IPaginatorConfig>({
        page: 1,
        itemsPerPage: 1,
        totalItems: BUDGET_SECTION_DATA.length
    })

    const sectionData = BUDGET_SECTION_DATA[currentSectionIndex]
    const sectionAnswer = answers[currentSectionIndex]?.answer || ''

    const isFirstStep = currentSectionIndex === 0
    const isLastStep = currentSectionIndex === BUDGET_SECTION_DATA.length - 1

    const animate = (callback = () => {}) => {
        setShouldAnimate(false)

        setTimeout(() => {
            setShouldAnimate(true)
            callback()
        }, 500)
    }

    const handleSubmit = () => onSubmit(answers)

    const handlePrev = () => {
        if (isFirstStep) return
        animate(() => setCurrentSectionIndex(prev => prev - 1))
    }

    const handleNext = () => {
        if (isLastStep) handleSubmit()
        else animate(() => setCurrentSectionIndex(prev => prev + 1))
    }

    const handleAnswerChange = (model: IBudgetSectionAnswer) => {
        const answerQuestion = answers.find(
            ({ question }) => question === model.question
        )
        if (answerQuestion) {
            const questionI = answers.indexOf(answerQuestion)
            const newAnswers = Object.assign(
                [],
                answers
            ) as IBudgetSectionAnswer[]

            newAnswers[questionI].answer = model.answer
            setAnswers(newAnswers)
        } else setAnswers([...answers, model])
    }

    useEffect(() => {
        const page = currentSectionIndex + 1

        setPagination({ ...pagination, page })

        if (page > currentPageGA) {
            setCurrentPageGA(page)
            analytics.emitCurrentPage(page)
        }
    }, [currentSectionIndex])

    useEffect(() => {
        setShouldAnimate(true)
    }, [])

    return (
        <Styles.Container>
            <Styles.Content
                initial="show"
                variants={animation}
                animate={shouldAnimate ? 'show' : 'hide'}
            >
                <LPBudgetSection
                    data={sectionData}
                    answer={sectionAnswer}
                    onChange={handleAnswerChange}
                />
            </Styles.Content>

            <Styles.Footer>
                <AppPaginator
                    readonly
                    showLabel
                    isProgressMode
                    showActions={false}
                    config={pagination}
                    labelPosition={isMobile ? 'center' : 'start'}
                />

                <AppButtonNavigator
                    className="sm:mb-6"
                    onPrev={handlePrev}
                    onNext={handleNext}
                    showPrev={!isFirstStep}
                    disabledNext={!sectionAnswer}
                    textNext={isLastStep ? 'Concluir' : undefined}
                />
            </Styles.Footer>
        </Styles.Container>
    )
}

export default LPBudgetFlow
