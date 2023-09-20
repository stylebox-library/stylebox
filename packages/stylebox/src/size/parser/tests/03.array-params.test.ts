import { parse } from '..'

describe('array params', () => {
  test('empty array - parse([])', () => {
    const styles = {}

    expect(parse(styles, [])).toBe(false)
    expect(styles).toEqual({})
  })

  describe('1 array param', () => {
    test('parse([0])', () => {
      const styles = {}

      expect(parse(styles, [0])).toBe(true)
      expect(styles).toEqual({
        width: 0,
        height: 0
      })
    })

    test('parse([1])', () => {
      const styles = {}

      expect(parse(styles, [1])).toBe(true)
      expect(styles).toEqual({
        width: '1rem',
        height: '1rem'
      })
    })
  })

  describe('2 array params', () => {
    test('parse([0, 0])', () => {
      const styles = {}

      expect(parse(styles, [0, 0])).toBe(true)
      expect(styles).toEqual({
        width: 0,
        height: 0
      })
    })

    test('parse([0, 1])', () => {
      const styles = {}

      expect(parse(styles, [0, 1])).toBe(true)
      expect(styles).toEqual({
        width: 0,
        height: '1rem'
      })
    })

    test('parse([1, 0])', () => {
      const styles = {}

      expect(parse(styles, [1, 0])).toBe(true)
      expect(styles).toEqual({
        width: '1rem',
        height: 0
      })
    })

    test('parse([1, 1])', () => {
      const styles = {}

      expect(parse(styles, [1, 1])).toBe(true)
      expect(styles).toEqual({
        width: '1rem',
        height: '1rem'
      })
    })

    test('parse([0, { ... }])', () => {
      const styles = {}

      expect(parse(styles, [0, { height: 1 }])).toBe(true)
      expect(styles).toEqual({
        width: 0,
        height: '1rem'
      })
    })

    test('parse([0, { ... }])', () => {
      const styles = {}

      expect(parse(styles, [
        0,
        {
          width: 1,
          height: 2,
          minWidth: 0
        }
      ])).toBe(true)

      expect(styles).toEqual({
        width: '1rem',
        height: '2rem',
        minWidth: 0
      })
    })
  })

  describe('3 array params', () => {
    test('parse([0, 0, {}])', () => {
      const styles = {}

      expect(parse(styles, [0, 0, {}])).toBe(true)
      expect(styles).toEqual({
        width: 0,
        height: 0
      })
    })

    test('parse([0, 1, { ... }])', () => {
      const styles = {}

      expect(parse(styles, [0, 1, { minWidth: 2 }])).toBe(true)
      expect(styles).toEqual({
        width: 0,
        height: '1rem',
        minWidth: '2rem'
      })
    })

    test('parse([1, 2, { ... }])', () => {
      const styles = {}

      expect(parse(styles, [
        1,
        2,
        {
          minWidth: 3,
          minHeight: 4
        }
      ])).toBe(true)

      expect(styles).toEqual({
        width: '1rem',
        height: '2rem',
        minWidth: '3rem',
        minHeight: '4rem'
      })
    })
  })
})
