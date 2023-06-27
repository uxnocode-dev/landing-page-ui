import theme from '@/styles/ts/theme'
import Styles from './styles'
import React from 'react'

interface IHighlightTextProps {
    text: string
    color?: string
    velocity?: number
    highlights: string[]
    className?: string
}

const HighlightText: React.FC<IHighlightTextProps> = props => {
    const { text, highlights, color = theme.colors.secondary } = props

    if (!highlights.length) return <Styles.Part>{text}</Styles.Part>

    const regex = new RegExp(`(${highlights.join('|')})`, 'gi')
    const parts = text.split(regex)

    const highlightStyle: React.CSSProperties = { color }

    const getText = (value: string) => {
        const Part = <Styles.Part>{value}</Styles.Part>

        const Highlight = (
            <Styles.Highlight
                style={highlightStyle}
                className="animate__animated animate__flash animate__delay-2s"
            >
                {value}
            </Styles.Highlight>
        )

        if (regex.test(value)) return Highlight
        else return Part
    }

    return (
        <Styles.Part>
            {parts.map((part, i) => (
                <React.Fragment key={i}>{getText(part)}</React.Fragment>
            ))}
        </Styles.Part>
    )
}

export default HighlightText
