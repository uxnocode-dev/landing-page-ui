import { rgba } from 'polished'
import { css } from 'styled-components'

interface INeonMixin {
    strong?: number
    shadownSize?: string
    shadownOnly?: boolean
    shadownStrong?: number
}

const defaultConfig: INeonMixin = {
    strong: 0.14,
    shadownSize: '20px',
    shadownOnly: false,
    shadownStrong: 0.4
}

export const neon = (color: string, data = defaultConfig) => css`
    background: ${data.shadownOnly ? '' : rgba(color, data.strong)};
    box-shadow: 0px 0px ${data.shadownSize} 0px
        ${rgba(color, data.shadownStrong)};
`
