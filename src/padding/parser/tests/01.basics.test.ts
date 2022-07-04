import { parse } from '..'

describe('basics', () => {
  describe('numbers', () => {
    test('parse(1)', () => {
      const styles = {}

      parse(styles, 1)
      expect(styles).toEqual({ padding: '1rem' })
    })

    test('parse(1, 2)', () => {
      const styles = {}

      parse(styles, 1, 2)
      expect(styles).toEqual({
        paddingTop:    '1rem',
        paddingBottom: '1rem',
        paddingLeft:   '2rem',
        paddingRight:  '2rem',
      })
    })

    test('parse(1, 2, 3)', () => {
      const styles = {}

      parse(styles, 1, 2, 3)
      expect(styles).toEqual({
        paddingTop:    '1rem',
        paddingLeft:   '2rem',
        paddingRight:  '2rem',
        paddingBottom: '3rem',
      })
    })

    test('parse(1, 2, 3, 4)', () => {
      const styles = {}

      parse(styles, 1, 2, 3, 4)
      expect(styles).toEqual({
        paddingTop:    '1rem',
        paddingRight:  '2rem',
        paddingBottom: '3rem',
        paddingLeft:   '4rem',
      })
    })
  })

  describe('objects', () => {
    test('parse({ of: 1 })', () => {
      const styles = {}

      parse(styles, { of: 1 })
      expect(styles).toEqual({ padding: '1rem' })
    })

    test('parse({ top: 2 })', () => {
      const styles = {}

      parse(styles, { top: 2 })
      expect(styles).toEqual({ paddingTop: '2rem' })
    })

    test('parse({ horizontal: 3 })', () => {
      const styles = {}

      parse(styles, { horizontal: 3 })
      expect(styles).toEqual({
        paddingLeft:  '3rem',
        paddingRight: '3rem',
      })
    })

    test('parse({ vertical: 3 })', () => {
      const styles = {}

      parse(styles, { vertical: 3 })
      expect(styles).toEqual({
        paddingTop:    '3rem',
        paddingBottom: '3rem',
      })
    })
  })

  describe('numbers with addition objects', () => {
    test('parse(0, { horizontal: 1 })', () => {
      const styles = {}

      parse(styles, 0, { horizontal: 1 })
      expect(styles).toEqual({
        padding:      0,
        paddingLeft:  '1rem',
        paddingRight: '1rem',
      })
    })

    test('parse(1, 2, { vertical: 3 })', () => {
      const styles = {}

      parse(styles, 1, 2, { vertical: 3 })
      expect(styles).toEqual({
        paddingTop:    '3rem',
        paddingBottom: '3rem',
        paddingLeft:   '2rem',
        paddingRight:  '2rem',
      })
    })
  })
})
