import landingPage from '@/assets/landing-page'
import { ICaseItemLP } from '@/interfaces/case.interface'

export const CASES_DATA: ICaseItemLP[] = [
    {
        title: `Smarttec`,
        image: landingPage.cases.SmartTec,
        description: `Sistema de câmeras com IA`
    },
    {
        title: `Bora Planejar`,
        image: landingPage.cases.BoraPlanejar,
        description: `Sistema organizacional`
    }
]
