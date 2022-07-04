import { parseAsCSSColor as parse } from '..'

describe('basics', () => {
  test('empty call (parse())', () => {
    expect(parse()).toBe(null)
  })

  describe('colors as number', () => {
    test('0x000000', () => {
      expect(parse(0x000000)).toBe('#000000')
    })

    test('0xFFFFFF', () => {
      expect(parse(0xFFFFFF)).toBe('#ffffff')
    })

    test('0xFF0000', () => {
      expect(parse(0xFF0000)).toBe('#ff0000')
    })

    test('0x00FF00', () => {
      expect(parse(0x00FF00)).toBe('#00ff00')
    })

    test('0x0000FF', () => {
      expect(parse(0x0000FF)).toBe('#0000ff')
    })

    test('0x123456', () => {
      expect(parse(0x123456)).toBe('#123456')
    })

    test('0x100000', () => {
      expect(parse(0x100000)).toBe('#100000')
    })

    test('0x010000', () => {
      expect(parse(0x010000)).toBe('#010000')
    })

    test('0x001000', () => {
      expect(parse(0x001000)).toBe('#001000')
    })

    test('0x000100', () => {
      expect(parse(0x000100)).toBe('#000100')
    })

    test('0x000010', () => {
      expect(parse(0x000010)).toBe('#000010')
    })

    test('0x000001', () => {
      expect(parse(0x000001)).toBe('#000001')
    })

    test('0', () => {
      expect(parse(0)).toBe('#000000')
    })

    test('1', () => {
      expect(parse(1)).toBe('#000001')
    })
  })

  describe('colors as string', () => {
    test('#123456', () => {
      expect(parse('#123456')).toBe('#123456')
    })

    test('0x123456', () => {
      expect(parse('0x123456')).toBe('#123456')
    })
  })

  describe('CSS color keywords', () => {
    test('black', () => {
      expect(parse('black')).toBe('#000000')
    })

    test('white', () => {
      expect(parse('white')).toBe('#ffffff')
    })

    test('red', () => {
      expect(parse('red')).toBe('#ff0000')
    })

    test('lime', () => {
      expect(parse('lime')).toBe('#00ff00')
    })

    test('blue', () => {
      expect(parse('blue')).toBe('#0000ff')
    })
  })
})
