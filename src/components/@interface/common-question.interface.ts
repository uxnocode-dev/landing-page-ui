import React from 'react'
import { IAppAccordionRef } from '../common/app-accordion'

export interface IFaqQuestion {
    text: string
    title: string
}

export interface IFaqQuestionItem {
    question: IFaqQuestion
    ref: React.RefObject<IAppAccordionRef>
}
