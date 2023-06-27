import { IPaginatorConfig } from '@/interfaces/_paginator.interface'

export function filterPaginatorItems<Data>(
    list: Data[],
    pagination: IPaginatorConfig
) {
    const startIndex = (pagination.page - 1) * pagination.itemsPerPage
    const endIndex = startIndex + pagination.itemsPerPage

    return list.slice(startIndex, endIndex)
}
