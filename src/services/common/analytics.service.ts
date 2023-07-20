export class AnalyticsService {
    emit(name: string, data?: Gtag.CustomParams) {
        window.gtag('event', name, data)
    }
}
