import enviroments from '@/config/enviroments'
import { AnalyticsService } from '@/services/common/analytics.service'
const analyticsService = new AnalyticsService()

export default {
    emitInit() {
        analyticsService.emit('contact_init')
        analyticsService.emit('conversion', {
            send_to: `${enviroments.ads_analytics_id}/FX1FCIOz0LoYEOHM4fcp`
        })
    },
    emitFinish() {
        analyticsService.emit('contact_finish')
    }
}
