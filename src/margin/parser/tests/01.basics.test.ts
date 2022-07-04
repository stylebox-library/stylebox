import { parse } from '..'

describe('basics', () => {
  describe('numbers', () => {
    test('parse(1)', () => {
      const styles = {}

      parse(styles, 1)
      expect(styles).toEqual({ margin: '1rem' })
    })

    test('parse(1, 2)', () => {
      const styles = {}

      parse(styles, 1, 2)
      expect(styles).toEqual({
        marginTop:    '1rem',
        marginBottom: '1rem',
        marginLeft:   '2rem',
        marginRight:  '2rem',
      })
    })

    test('parse(1, 2, 3)', () => {
      const styles = {}

      parse(styles, 1, 2, 3)
      expect(styles).toEqual({
        marginTop:    '1rem',
        marginLeft:   '2rem',
        marginRight:  '2rem',
        marginBottom: '3rem',
      })
    })

    test('parse(1, 2, 3, 4)', () => {
      const styles = {}

      parse(styles, 1, 2, 3, 4)
      expect(styles).toEqual({
        marginTop:    '1rem',
        marginRight:  '2rem',
        marginBottom: '3rem',
        marginLeft:   '4rem',
      })
    })
  })

  describe('objects', () => {
    test('parse({ of: 1 })', () => {
      const styles = {}

      parse(styles, { of: 1 })
      expect(styles).toEqual({ margin: '1rem' })
    })

    test('parse({ top: 2 })', () => {
      const styles = {}

      parse(styles, { top: 2 })
      expect(styles).toEqual({ marginTop: '2rem' })
    })

    test('parse({ horizontal: 3 })', () => {
      const styles = {}

      parse(styles, { horizontal: 3 })
      expect(styles).toEqual({
        marginLeft:  '3rem',
        marginRight: '3rem',
      })
    })

    test('parse({ vertical: 3 })', () => {
      const styles = {}

      parse(styles, { vertical: 3 })
      expect(styles).toEqual({
        marginTop:    '3rem',
        marginBottom: '3rem',
      })
    })
  })

  describe('numbers with addition objects', () => {
    test('parse(0, { horizontal: 1 })', () => {
      const styles = {}

      parse(styles, 0, { horizontal: 1 })
      expect(styles).toEqual({
        margin:      0,
        marginLeft:  '1rem',
        marginRight: '1rem',
      })
    })

    test('parse(1, 2, { vertical: 3 })', () => {
      const styles = {}

      parse(styles, 1, 2, { vertical: 3 })
      expect(styles).toEqual({
        marginTop:    '3rem',
        marginBottom: '3rem',
        marginLeft:   '2rem',
        marginRight:  '2rem',
      })
    })
  })
})
