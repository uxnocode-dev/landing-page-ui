import { AnalyticsService } from '@/services/common/analytics.service'
const analyticsService = new AnalyticsService()

export default {
    emitInit() {
        analyticsService.emit('contact_init')
    },
    emitFinish() {
        analyticsService.emit('contact_finish')
    }
}
