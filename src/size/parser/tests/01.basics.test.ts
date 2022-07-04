import { parse } from '..'

describe('basics', () => {
  describe('edge cases', () => {
    test('empty call (parse())', () => {
      const styles = {}

      expect(parse(styles)).toBe(false)
      expect(styles).toEqual({})
    })

    describe('invalid inputs', () => {
      test('useless numbers', () => {
        const styles = {}

        expect(parse(styles, NaN)).toBe(false)
        expect(styles).toEqual({})

        expect(parse(styles, -Infinity)).toBe(false)
        expect(styles).toEqual({})

        expect(parse(styles, Infinity)).toBe(false)
        expect(styles).toEqual({})
      })
    })
  })

  describe('1 param', () => {
    test('parse(true/false)', () => {
      const styles = {}

      expect(parse(styles, true)).toBe(false)
      expect(styles).toEqual({})

      expect(parse(styles, false)).toBe(true)
      expect(styles).toEqual({
        width:  0,
        height: 0,
      })
    })

    test('parse(0)', () => {
      const styles = {}

      expect(parse(styles, 0)).toBe(true)
      expect(styles).toEqual({
        width:  0,
        height: 0,
      })
    })

    test('parse(1)', () => {
      const styles = {}

      expect(parse(styles, 1)).toBe(true)
      expect(styles).toEqual({
        width:  '1rem',
        height: '1rem',
      })
    })
  })

  describe('2 params', () => {
    describe('parse(boolean, boolean)', () => {
      test('parse(true, true)', () => {
        const styles = {}

        expect(parse(styles, true, true)).toBe(false)
        expect(styles).toEqual({})
      })

      test('parse(true, false)', () => {
        const styles = {}

        expect(parse(styles, true, false)).toBe(true)
        expect(styles).toEqual({ height: 0 })
      })

      test('parse(false, true)', () => {
        const styles = {}

        expect(parse(styles, false, true)).toBe(true)
        expect(styles).toEqual({ width: 0 })
      })

      test('parse(false, false)', () => {
        const styles = {}

        expect(parse(styles, false, false)).toBe(true)
        expect(styles).toEqual({
          width:  0,
          height: 0,
        })
      })
    })

    test('parse(0, 0)', () => {
      const styles = {}

      expect(parse(styles, 0, 0)).toBe(true)
      expect(styles).toEqual({
        width:  0,
        height: 0,
      })
    })

    test('parse(0, 1)', () => {
      const styles = {}

      expect(parse(styles, 0, 1)).toBe(true)
      expect(styles).toEqual({
        width:  0,
        height: '1rem',
      })
    })

    test('parse(1, 0)', () => {
      const styles = {}

      expect(parse(styles, 1, 0)).toBe(true)
      expect(styles).toEqual({
        width:  '1rem',
        height: 0,
      })
    })

    test('parse(1, 1)', () => {
      const styles = {}

      expect(parse(styles, 1, 1)).toBe(true)
      expect(styles).toEqual({
        width:  '1rem',
        height: '1rem',
      })
    })
  })
})
