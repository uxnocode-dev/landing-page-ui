import Styles from './styles'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import React, { useEffect, useMemo, useState } from 'react'
import { IPaginatorConfig } from '@/interfaces/_paginator.interface'

interface IAppPaginatorProps {
    readonly?: boolean
    className?: string
    showLabel?: boolean
    showActions?: boolean
    config: IPaginatorConfig
    isProgressMode?: boolean
    labelPosition?: 'start' | 'center' | 'end'
    onPageChange?: (pageNumber: number) => void
}

const AppPaginator: React.FC<IAppPaginatorProps> = props => {
    const {
        config,
        className,
        onPageChange,
        readonly = false,
        showLabel = false,
        showActions = true,
        labelPosition = 'center',
        isProgressMode = false
    } = props
    const { page, itemsPerPage, totalItems } = config

    const [pages, setPages] = useState<number[]>([])
    const [selectedPage, setSelectedPage] = useState(page)
    const totalPages = useMemo(
        () => Math.ceil(totalItems / itemsPerPage),
        [totalItems, itemsPerPage]
    )

    const isActive = (item: number) => {
        if (isProgressMode) return item <= page
        return item === page
    }

    const handlePageChange = (value: number) => {
        if (onPageChange) onPageChange(value)
    }

    const handleBack = () => {
        const currentPage = selectedPage - 1
        if (currentPage === 0) return

        setSelectedPage(currentPage)
        handlePageChange(currentPage)
    }

    const handleNext = () => {
        const currentPage = selectedPage + 1
        if (currentPage - 1 === pages.length) return

        setSelectedPage(currentPage)
        handlePageChange(currentPage)
    }

    const handleSelectPage = (page: number) => {
        if (readonly) return

        const currentPage = page
        setSelectedPage(currentPage)
        handlePageChange(currentPage)
    }

    const initItems = () => {
        const pages = Array.from({ length: totalPages }).map(
            (x, index) => index + 1
        )
        setPages(pages)
    }

    useEffect(() => {
        initItems()
    }, [totalPages])

    return (
        <Styles.Container>
            <Styles.Group className={className}>
                {showActions && (
                    <Styles.Button onClick={handleBack}>
                        <HiArrowLeft />
                    </Styles.Button>
                )}

                {pages.map(item => (
                    <Styles.Item
                        key={item}
                        active={isActive(item)}
                        onClick={() => handleSelectPage(item)}
                    />
                ))}

                {showActions && (
                    <Styles.Button onClick={handleNext}>
                        <HiArrowRight />
                    </Styles.Button>
                )}
            </Styles.Group>

            {showLabel && (
                <Styles.Label className={`justify-${labelPosition}`}>
                    {page} de {totalItems}
                </Styles.Label>
            )}
        </Styles.Container>
    )
}

export default AppPaginator
