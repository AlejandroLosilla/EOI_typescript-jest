import { checkLimit } from "../src/checkLimit";

describe('ocurrences cases', () => {
    test.each([
        {
            countedCharacters: 60,
            limit: 'It has passed limit 1'
        },
        {
            countedCharacters: 120,
            limit: 'It has passed limit 2'
        },
        {
            countedCharacters: 152,
            limit: 'It has passed limit 3'
        },
        {
            countedCharacters: 230,
            limit: 'It has passed limit 4'
        },
        {
            countedCharacters: 260,
            limit: 'It has passed limit 5'
        }
    ])('case test', ({ countedCharacters, limit }) => {
        if (countedCharacters > 250) {
            expect(checkLimit(countedCharacters)).toEqual({
                limit,
                invalid: true
            })
        } else {
            expect(checkLimit(countedCharacters)).toEqual({
                limit
            })
        }
    })
})