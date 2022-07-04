import { parse } from '..'

describe('basics', () => {
  test('font', () => {
    const styles = {}

    parse(styles, { font: 'Arial' })
    expect(styles).toEqual({ font: 'Arial' })
  })

  test('color', () => {
    const styles = {}

    parse(styles, { color: 0xFF0000 })
    expect(styles).toEqual({ color: '#ff0000' })
  })

  test('size', () => {
    const styles = {}

    parse(styles, { size: 1 })
    expect(styles).toEqual({ fontSize: '1rem' })
  })

  test('weight', () => {
    const styles = {}

    parse(styles, { weight: 'bold' })
    expect(styles).toEqual({ fontWeight: 700 })
  })

  test('italic', () => {
    const styles = {}

    parse(styles, { italic: true })
    expect(styles).toEqual({ fontStyle: 'italic' })
  })

  test('underlined', () => {
    const styles = {}

    parse(styles, { underline: true })
    expect(styles).toEqual({ textDecoration: 'underline' })
  })

  test('spacing', () => {
    const styles = {}

    parse(styles, { spacing: 1 })
    expect(styles).toEqual({ letterSpacing: '1rem' })
  })

  describe('decoration', () => {
    test('decoration: false', () => {
      const styles = {}

      parse(styles, { decoration: false })
      expect(styles).toEqual({ textDecoration: 'none' })
    })

    test(`decoration: 'underline'`, () => {
      const styles = {}

      parse(styles, { decoration: 'underline' })
      expect(styles).toEqual({ textDecoration: 'underline' })
    })
  })

  describe('transform', () => {
    test('transform: false', () => {
      const styles = {}

      parse(styles, { transform: false })
      expect(styles).toEqual({ textTransform: 'none' })
    })

    test(`transform: 'underline'`, () => {
      const styles = {}

      parse(styles, { transform: 'capitalize' })
      expect(styles).toEqual({ textTransform: 'capitalize' })
    })
  })

  test('line height', () => {
    const styles = {}

    parse(styles, { lineHeight: 1.5 })
    expect(styles).toEqual({ lineHeight: 1.5 })
  })

  describe('shadow', () => {
    test('parse({ x: ..., y: ... })', () => {
      const styles = {}

      parse(styles, {
        shadow: {
          x: 1,
          y: 2
        }
      })
      expect(styles).toEqual({ textShadow: '1rem 2rem' })
    })

    test('parse({ x: ..., y: ..., color: ... })', () => {
      const styles = {}

      parse(styles, {
        shadow: {
          x:     1,
          y:     2,
          color: [0x000000, .5]
        }
      })
      expect(styles).toEqual({ textShadow: '1rem 2rem rgba(0,0,0,0.5)' })
    })

    test('parse({ x: ..., y: ..., blur: ..., color: ... })', () => {
      const styles = {}

      parse(styles, {
        shadow: {
          x:     1,
          y:     2,
          blur:  3,
          color: [0x000000, .5]
        }
      })
      expect(styles).toEqual({ textShadow: '1rem 2rem 3rem rgba(0,0,0,0.5)' })
    })

    test('parse([{ ... }, { ... }])', () => {
      const styles = {}

      parse(styles, {
        shadow: [
          { x: 1, y: 2 },
          { x: 3, y: 4 }
        ]
      })
      expect(styles).toEqual({ textShadow: '1rem 2rem, 3rem 4rem' })
    })
  })
})
