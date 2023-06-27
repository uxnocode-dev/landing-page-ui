import common from './_common'

const spacing = { ...common.spacing }
const colors = { ...common.colors, text: '#FFFFFF' }

const background = {
    bgPrimary: '#0B0E13',
    bgSecondary: '#161D26'
}

const theme = {
    spacing,
    colors: { ...colors, ...background }
}

export default theme
