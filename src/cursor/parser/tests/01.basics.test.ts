import { parse } from '..'

describe('basics', () => {
  describe('valid inputs', () => {
    describe('booleans', () => {
      test('parse(true)', () => {
        const styles = {}

        parse(styles, true)
        expect(styles).toEqual({})
      })

      test('parse(false)', () => {
        const styles = {}

        parse(styles, false)
        expect(styles).toEqual({ cursor: 'none' })
      })
    })

    describe('strings', () => {
      test('parse(\'auto\')', () => {
        const styles = {}

        parse(styles, 'auto')
        expect(styles).toEqual({ cursor: 'auto' })
      })

      test('parse(\'click\')', () => {
        const styles = {}

        parse(styles, 'click')
        expect(styles).toEqual({ cursor: 'pointer' })
      })
    })
  })

  describe('invalid inputs', () => {
    test('parse(null)', () => {
      const styles = {}

      // @ts-ignore
      parse(styles, null)
      expect(styles).toEqual({})
    })

    test('parse(0)', () => {
      const styles = {}

      // @ts-ignore
      parse(styles, 0)
      expect(styles).toEqual({})
    })

    test('parse(\'\')', () => {
      const styles = {}

      parse(styles, '')
      expect(styles).toEqual({})
    })

    test('parse(\'non-existing-cursor\')', () => {
      const styles = {}

      parse(styles, 'non-existing-cursor')
      expect(styles).toEqual({})
    })

    test('parse({})', () => {
      const styles = {}

      // @ts-ignore
      parse(styles, {})
      expect(styles).toEqual({})
    })
  })

  describe('edge cases', () => {
    test('empty call -> parse()', () => {
      const styles = {}

      parse(styles)
      expect(styles).toEqual({})
    })
  })
})
