import { AnalyticsService } from '@/services/common/analytics.service'
const analyticsService = new AnalyticsService()

export default {
    emitCurrentPage(page: number) {
        analyticsService.emit('contact_current_page', { page })
    }
}
