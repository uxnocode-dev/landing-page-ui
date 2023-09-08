const pattern = /^(\d{1,3})(\d{0,3})(\d{0,3})(\d{0,2})$/

const getRawValue = (value: string) => value.match(/\d+/g)?.join('')

const getFormatValue = (value: string) => {
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{1,3})(\d{0,3})$/, '$1,$2')

    return value
}

const validation = (event: React.FormEvent<HTMLInputElement>) => {
    let { value } = event.currentTarget
    event.currentTarget.maxLength = 14

    if (!value.match(pattern)) event.currentTarget.value = getFormatValue(value)

    return event
}

export default {
    getRawValue,
    getFormatValue,
    directive: { onKeyUp: validation }
}
