import { AnalyticsService } from '@/services/common/analytics.service'
const analyticsService = new AnalyticsService()

export default {
    emitSend(role: string) {
        analyticsService.emit('career_send', { role })
    }
}
