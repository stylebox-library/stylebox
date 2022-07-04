import { parse } from '..'

describe('shorthand for no border', () => {
  test('parse(false)', () => {
    const styles = {}

    parse(styles, false)
    expect(styles).toEqual({ border: 'none' })
  })
})

describe('3 params', () => {
  test(`parse('1px', 'solid', 'black')`, () => {
    const styles = {}

    parse(styles, '1px', 'solid', 'black')
    expect(styles).toEqual({ border: '1px solid #000000' })
  })

  test(`parse('2px', 'double', [0xFF0000, .5])`, () => {
    const styles = {}

    parse(styles, '2px', 'double', [0xFF0000, .5])
    expect(styles).toEqual({ border: '2px double rgba(255,0,0,0.5)' })
  })
})

describe('4 params', () => {
  test(`parse('1px', 'solid', 'black', 1)`, () => {
    const styles = {}

    parse(styles, '1px', 'solid', 'black', 1)
    expect(styles).toEqual({
      border:       '1px solid #000000',
      borderRadius: '1rem',
    })
  })

  test(`parse('2px', 'double', [0xFF0000, .5], '1px')`, () => {
    const styles = {}

    parse(styles, '2px', 'double', [0xFF0000, .5], '1px')
    expect(styles).toEqual({
      border:       '2px double rgba(255,0,0,0.5)',
      borderRadius: '1px',
    })
  })
})

describe('object', () => {
  describe('.of:', () => {
    test('parse({ of: false })', () => {
      const styles = {}

      parse(styles, { of: false })
      expect(styles).toEqual({ border: 'none' })
    })

    test(`parse({ of: ['3px', 'dotted', ['black', .5]]})`, () => {
      const styles = {}

      parse(styles, { of: ['3px', 'dotted', ['black', .5]]})
      expect(styles).toEqual({ border: '3px dotted rgba(0,0,0,0.5)' })
    })

    test(`parse({ of: [1, 'groove', 'yellow', 2]})`, () => {
      const styles = {}

      parse(styles, { of: [1, 'groove', 'yellow', 2]})
      expect(styles).toEqual({
        border:       '1rem groove #ffff00',
        borderRadius: '2rem',
      })
    })
  })

  describe('.radius:', () => {
    test(`parse({ radius: '1px' })`, () => {
      const styles = {}

      parse(styles, { radius: '1px' })
      expect(styles).toEqual({ borderRadius: '1px' })
    })

    test('parse({ radius: 2 })', () => {
      const styles = {}

      parse(styles, { radius: 2 })
      expect(styles).toEqual({ borderRadius: '2rem' })
    })
  })

  describe('.top: / .right: / .bottom: / .left:', () => {
    test(`parse({ top: ['1px', 'solid', 'black'})`, () => {
      const styles = {}

      parse(styles, { top: ['1px', 'solid', 'black'] })
      expect(styles).toEqual({ borderTop: '1px solid #000000' })
    })

    test(`parse({ right: ['1px', 'solid', 'black'})`, () => {
      const styles = {}

      parse(styles, { right: ['1px', 'solid', 'black'] })
      expect(styles).toEqual({ borderRight: '1px solid #000000' })
    })

    test(`parse({ bottom: ['1px', 'solid', 'black'})`, () => {
      const styles = {}

      parse(styles, { bottom: ['1px', 'solid', 'black'] })
      expect(styles).toEqual({ borderBottom: '1px solid #000000' })
    })

    test(`parse({ left: ['1px', 'solid', 'black'})`, () => {
      const styles = {}

      parse(styles, { left: ['1px', 'solid', 'black'] })
      expect(styles).toEqual({ borderLeft: '1px solid #000000' })
    })
  })

  describe('.vertical: / .horizontal:', () => {
    test(`parse({ vertical: ['1px', 'solid', 'black'})`, () => {
      const styles = {}

      parse(styles, { vertical: ['1px', 'solid', 'black'] })
      expect(styles).toEqual({
        borderTop:    '1px solid #000000',
        borderBottom: '1px solid #000000',
      })
    })

    test(`parse({ horizontal: ['1px', 'solid', 'black'})`, () => {
      const styles = {}

      parse(styles, { horizontal: ['1px', 'solid', 'black'] })
      expect(styles).toEqual({
        borderLeft:  '1px solid #000000',
        borderRight: '1px solid #000000',
      })
    })
  })
})
