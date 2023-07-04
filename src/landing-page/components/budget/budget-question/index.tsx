import Styles from './styles'
import React, { useEffect, useState } from 'react'
import { IBudgetQuestion } from '@/interfaces/budget.interface'

interface ILPBudgetQuestionProps {
    answer: string
    data: IBudgetQuestion
    onChange?: (data: string) => void
}

const LPBudgetQuestion: React.FC<ILPBudgetQuestionProps> = props => {
    const { data, answer, onChange } = props
    const [selectedOption, setSelectedOption] = useState('')

    const handleSelectedOption = (option: string) => {
        setSelectedOption(option)
        if (onChange) onChange(option)
    }

    useEffect(() => {
        setSelectedOption(answer)
    }, [answer])

    return (
        <Styles.Container>
            <Styles.Title>
                {data.order}. {data.title}
            </Styles.Title>

            <Styles.Content
                style={{
                    gridTemplateColumns: `repeat(${data.options.length}, 1fr)`
                }}
            >
                {data.options.map((item, index) => (
                    <Styles.Card
                        key={index}
                        isActive={item === selectedOption}
                        onClick={() => handleSelectedOption(item)}
                    >
                        {item}
                    </Styles.Card>
                ))}
            </Styles.Content>
        </Styles.Container>
    )
}

export default LPBudgetQuestion
