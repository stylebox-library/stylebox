import { parse } from '..'

describe('basics', () => {
  test('parse(number)', () => {
    const styles = {}

    expect(parse(styles, 0x123456)).toBe(true)
    expect(styles).toEqual({ color: '#123456' })
  })

  test('parse(string)', () => {
    const styles = {}

    expect(parse(styles, '0x123456')).toBe(true)
    expect(styles).toEqual({ color: '#123456' })
  })

  test('parse([number, number]) - color with alpha', () => {
    const styles = {}

    expect(parse(styles, [0x123456, 0.5])).toBe(true)
    expect(styles).toEqual({ color: 'rgba(18,52,86,0.5)' })
  })

  test('parse({ of: ... })', () => {
    const styles = {}

    expect(parse(styles, { of: 'white' })).toBe(true)
    expect(styles).toEqual({ color: '#ffffff' })
  })

  test('parse({ text: ... })', () => {
    const styles = {}

    expect(parse(styles, { text: 'black' })).toBe(true)
    expect(styles).toEqual({ color: '#000000' })
  })

  test('parse({ background: ... })', () => {
    const styles = {}

    expect(parse(styles, { background: ['red', 0.5] })).toBe(true)
    expect(styles).toEqual({ backgroundColor: 'rgba(255,0,0,0.5)' })
  })

  test('parse({ fill: ... })', () => {
    const styles = {}

    expect(parse(styles, { fill: [0x123456, 0.75] })).toBe(true)
    expect(styles).toEqual({ fill: 'rgba(18,52,86,0.75)' })
  })

  test('parse({ stroke: ... })', () => {
    const styles = {}

    expect(parse(styles, { stroke: ['0x123456', 0.75] })).toBe(true)
    expect(styles).toEqual({ stroke: 'rgba(18,52,86,0.75)' })
  })
})
