import { countChars } from "../src/adapters";
import { removeExclamations } from "../src/exclamator";

jest.mock('../src/adapters', () => ({
  countChars: jest.fn(() => 25)
}))

jest.mock('../src/checkLimit', () => ({
  checkLimit: jest.fn(() => ({ limit: 'It has passed no limits' }))
}))

describe('removeExclamations', () => {
  test.each([
    '¡¡¡¡HOLAAAA!!!!',
    '¡¡¡¡HOL¡!AAAA!!!!',
    'HOLAAAA'
  ])('string cases for removeExclamations', (string) => {
    expect(removeExclamations(string, 'es_ES')).toEqual({
        total: 50,
        value: '¡HOLAAAA!',
        limit: 'It has passed no limits'
    })
  })

  it('returns ! when receiving an empty string', () => {
    expect(removeExclamations('', 'es_ES')).toEqual({
        total: 50,
        value: '¡!',
        limit: 'It has passed no limits'
    });
  })

  it('returns ! when receiving a string that only contains exclamation signs', () => {
    expect(removeExclamations('¡!¡!¡!¡', 'es_ES')).toEqual({
        total: 50,
        value: '¡!',
        limit: 'It has passed no limits'
    });
  })

  it('only adds an exclamation at the end when language is English', () => {
    expect(removeExclamations('¡¡¡Hello World!!!', 'en_US')).toEqual({
        total: 50,
        value: 'Hello World!',
        limit: 'It has passed no limits'
    });
  })
})