import Styles from './styles'
import React, { useEffect, useState } from 'react'
import { useWindowSize } from '@/hooks/window-size.hook'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { IPaginatorConfig } from '@/interfaces/_paginator.interface'
import AppCarouselPaginator from '@/components/common/app-paginator'
import { filterPaginatorItems } from '@/functions/paginator-filter.function'

interface IContentPaginatorProps {
    children: React.ReactNode
    itemsPerPage: number
    contentClassName?: string
}

const ContentPaginator: React.FC<IContentPaginatorProps> = props => {
    const { children, contentClassName, itemsPerPage = 3 } = props

    const { isMobile } = useWindowSize()
    const [items, setItems] = useState<JSX.Element[]>([])
    const [contentRef] = useAutoAnimate({ duration: 400 })
    const [pagination, setPagination] = useState<IPaginatorConfig>({
        page: 1,
        itemsPerPage,
        totalItems: 0
    })

    const itemsToShow = isMobile
        ? items
        : filterPaginatorItems(items, pagination)

    const onPageChange = (page: number) => {
        setPagination({ ...pagination, page })
    }

    useEffect(() => {
        const result = React.Children.toArray(children).map((child, index) => (
            <Styles.Item key={index}>{child}</Styles.Item>
        ))

        setPagination({
            page: 1,
            itemsPerPage,
            totalItems: result.length
        })

        setItems(result)
    }, [children])

    return (
        <Styles.Container>
            {!isMobile && (
                <AppCarouselPaginator
                    className="my-6"
                    config={pagination}
                    onPageChange={onPageChange}
                />
            )}

            <Styles.Content className={contentClassName} ref={contentRef}>
                {itemsToShow}
            </Styles.Content>
        </Styles.Container>
    )
}

export default ContentPaginator
