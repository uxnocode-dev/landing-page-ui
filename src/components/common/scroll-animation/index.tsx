import { useDebounce } from '@/hooks/debounce.hook'
import React, { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
    children: React.ReactNode
    animation: string
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = props => {
    const { children, animation } = props

    const targetRef = useRef<HTMLDivElement>(null)
    const [isHidden, setIsHidden] = useState(true)
    const [isVisible, setIsVisible] = useState(false)
    const debouncedSearchTerm = useDebounce(isVisible, 10)
    const [observer, setObserver] = useState<IntersectionObserver>()

    const enableObserver = !!observer && targetRef.current

    const handleIntersect: IntersectionObserverCallback = entries => {
        entries.forEach(entry => setIsVisible(entry.isIntersecting))
    }

    const destroyObserve = () => {
        if (enableObserver) observer.unobserve(targetRef.current)
    }

    const checkVisible = () => {
        if (!targetRef.current) return
        const classAnimation = `animate__${animation}`
        const element = targetRef.current as HTMLElement
        const hasClass = element.classList.contains(classAnimation)

        if (hasClass) return

        setIsHidden(false)
        const rect = element.getBoundingClientRect()
        const clientHeight = document.documentElement.clientHeight
        const viewHeight = Math.max(clientHeight, window.innerHeight)
        const result = !(rect.bottom < 0 || rect.top - viewHeight >= 0)

        if (result) element.classList.add(classAnimation)
    }

    useEffect(() => {
        const _observer = new IntersectionObserver(handleIntersect, {
            root: null,
            threshold: 0.5,
            rootMargin: '0px'
        })

        setObserver(_observer)

        if (targetRef.current) _observer.observe(targetRef.current)

        return destroyObserve
    }, [])

    useEffect(() => {
        if (isVisible) checkVisible()
    }, [debouncedSearchTerm])

    return (
        <div
            ref={targetRef}
            className="animate__animated"
            style={{ visibility: isHidden ? 'hidden' : 'visible' }}
        >
            {children}
        </div>
    )
}

export default ScrollAnimation
