import { parse } from '..'

describe('shorthands', () => {
  test('false', () => {
    const styles = {}

    parse(styles, false)
    expect(styles).toEqual({ background: 'none' })
  })

  describe('color', () => {
    test('0x000000', () => {
      const styles = {}

      parse(styles, 0x000000)
      expect(styles).toEqual({ background: '#000000' })
    })

    test('\'#ffffff\')', () => {
      const styles = {}

      parse(styles, '#ffffff')
      expect(styles).toEqual({ background: '#ffffff' })
    })

    test('[0x000000]', () => {
      const styles = {}

      parse(styles, [0x000000])
      expect(styles).toEqual({ background: '#000000' })
    })

    test('[\'black\', .5]', () => {
      const styles = {}

      parse(styles, ['black', 0.5])
      expect(styles).toEqual({ background: 'rgba(0,0,0,0.5)' })
    })
  })
})
