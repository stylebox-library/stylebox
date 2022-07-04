import { parse } from '..'

describe(`shorthand for { outline: 'none' }`, () => {
  test('parse(false)', () => {
    const styles = {}

    parse(styles, false)
    expect(styles).toEqual({ outline: 'none' })
  })
})

describe('3 values', () => {
  test(`parse('1px', 'solid', 'red')`, () => {
    const styles = {}

    parse(styles, '1px', 'solid', 'red')
    expect(styles).toEqual({ outline: '1px solid #ff0000' })
  })

  test(`parse('2px', 'double', 'blue')`, () => {
    const styles = {}

    parse(styles, '2px', 'double', 'blue')
    expect(styles).toEqual({ outline: '2px double #0000ff' })
  })
})

describe('4 values', () => {
  test(`parse('3px', 'dashed', 'green', 1)`, () => {
    const styles = {}

    parse(styles, '3px', 'dashed', 'green', 1)
    expect(styles).toEqual({
      outline:       '3px dashed #008000',
      outlineOffset: '1rem',
    })
  })
})

describe('object', () => {
  test('parse({ width: ... })', () => {
    const styles = {}

    parse(styles, { width: '2px' })
    expect(styles).toEqual({ outline: '2px solid #ff0000' })
  })

  test('parse({ style: ... })', () => {
    const styles = {}

    parse(styles, { style: 'double' })
    expect(styles).toEqual({ outline: '1px double #ff0000' })
  })

  test('parse({ color: ... })', () => {
    const styles = {}

    parse(styles, { color: [0xFFFFFF, .5] })
    expect(styles).toEqual({ outline: '1px solid rgba(255,255,255,0.5)' })
  })
})
