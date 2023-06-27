import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import LPBudgetQuestion from '../budget-question'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { IBudgetSection } from '@/interfaces/budget.interface'

export interface IBudgetSectionAnswer {
    order: number
    answer: string
    question: string
}
interface ILPBudgetSectionProps {
    answer: string
    data: IBudgetSection
    onChange?: (data: IBudgetSectionAnswer) => void
}
const LPBudgetSection: React.FC<ILPBudgetSectionProps> = props => {
    const { data, answer, onChange } = props
    const [parent] = useAutoAnimate()

    const handleQuestionChange = (answer: string) => {
        if (!onChange) return

        onChange({
            answer,
            order: data.question.order,
            question: data.question.title
        })
    }

    return (
        <Styles.Container ref={parent}>
            <Styles.Image src={images.Logo} />
            <Styles.Title>{data.title}</Styles.Title>
            <Styles.Text>{data.description}</Styles.Text>

            <LPBudgetQuestion
                answer={answer}
                data={data.question}
                onChange={handleQuestionChange}
            />
        </Styles.Container>
    )
}

export default LPBudgetSection
