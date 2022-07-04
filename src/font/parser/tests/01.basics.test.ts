import { parse } from '..'

describe('basics', () => {
  test('family', () => {
    const styles = {}

    parse(styles, { family: 'Arial' })
    expect(styles).toEqual({ fontFamily: 'Arial' })
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

  test('spacing', () => {
    const styles = {}

    parse(styles, { spacing: 1 })
    expect(styles).toEqual({ letterSpacing: '1rem' })
  })

  test('lineHeight', () => {
    const styles = {}

    parse(styles, { lineHeight: 1.5 })
    expect(styles).toEqual({ lineHeight: 1.5 })
  })
})
