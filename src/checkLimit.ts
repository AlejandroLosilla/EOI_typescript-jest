export function checkLimit(ocurrences: number) {
    const limitNum = 5;
    const limitRange = 50;
    const maxLimit = limitNum * limitRange;

    for (let numChars = maxLimit; numChars >= limitRange; numChars -= limitRange) {
        const limitId = numChars / limitRange;
        if (ocurrences > numChars) {
            const limit = `It has passed limit ${limitId}`

            if (numChars === maxLimit) return { limit, invalid: true }
            return { limit }
        }
    }

    return { limit: 'It has passed no limits' }
}