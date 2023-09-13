const pattern: RegExp = /^\d+(,\d{0,2})?$/

const getRawValue = (value: string): string => {
    const cleanedValue: string = value.replace(/[^\d,]/g, '')
    const parts: string[] = cleanedValue.split(',')

    if (parts.length > 1) {
        return `${parts[0]},${parts.slice(1).join('').slice(0, 2)}`
    }

    return cleanedValue
}

const getFormatValue = (value: string): string => {
    const cleanedValue: string = value.replace(/[^\d,]/g, '')
    const parts: string[] = cleanedValue.split(',')

    if (parts.length > 1) {
        return `R$ ${parts[0]},${parts.slice(1).join('').slice(0, 2)}`
    }

    return `R$ ${cleanedValue}`
}

const validation = (
    event: React.FormEvent<HTMLInputElement>
): React.FormEvent<HTMLInputElement> => {
    let { value } = event.currentTarget
    event.currentTarget.maxLength = 20 // Defina o tamanho máximo conforme necessário

    if (!value.match(pattern)) {
        event.currentTarget.value = getFormatValue(value)
    }

    return event
}

export default {
    getRawValue,
    getFormatValue,
    directive: { onKeyUp: validation }
}
