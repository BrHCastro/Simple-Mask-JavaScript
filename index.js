function mask(value, pattern) {
    let i = 0
    const v = value.toString()

    return pattern.replace(/#/g, () => v[i++] || '')
}

const masked = mask(15991656655, '(##) #####-####')

console.log(masked)