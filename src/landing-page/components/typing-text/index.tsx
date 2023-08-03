import HighlightText from '@/landing-page/components/highlight-text'
import React, { useEffect, useState } from 'react'
import Styles from './styles'

interface ITypingTextProps {
    text: string
    velocity?: number
    highlights?: string[]
    className?: string
    highlightColor?: string
}

const TypingText: React.FC<ITypingTextProps> = props => {
    const {
        text,
        className,
        velocity = 30,
        highlightColor,
        highlights = []
    } = props
    const [displayText, setDisplayText] = useState<string>('')

    useEffect(() => {
        let currentIndex = 0

        const interval = setInterval(() => {
            setDisplayText(text.substring(0, currentIndex))
            currentIndex++

            if (currentIndex > text.length) clearInterval(interval)
        }, velocity)

        return () => clearInterval(interval)
    }, [text])

    return (
        <Styles.Container className={className}>
            {displayText.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    <HighlightText
                        text={line}
                        color={highlightColor}
                        highlights={highlights}
                    />
                    <Styles.Line />
                </React.Fragment>
            ))}
        </Styles.Container>
    )
}

export default TypingText
