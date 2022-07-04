import { parseAsCSSColor as parse } from '..'

describe('alpha', () => {
  describe('color as number with alpha', () => {
    test('parse(0x000000, 0)', () => {
      expect(parse(0x000000, 0)).toBe('rgba(0,0,0,0)')
    })

    test('parse(0xFFFFFF, 1)', () => {
      expect(parse(0xFFFFFF, 1)).toBe('rgba(255,255,255,1)')
    })

    test('parse(0xFF0000, .5)', () => {
      expect(parse(0xFF0000, .5)).toBe('rgba(255,0,0,0.5)')
    })

    test('parse(0x00FF00, -1)', () => {
      expect(parse(0x00FF00, -1)).toBe('rgba(0,255,0,0)')
    })

    test('parse(0x0000FF, -1)', () => {
      expect(parse(0x0000FF, 2)).toBe('rgba(0,0,255,1)')
    })

    test('parse(0x123456, .5)', () => {
      expect(parse(0x123456, .5)).toBe('rgba(18,52,86,0.5)')
    })
  })

  describe('color as string with alpha', () => {
    test('parse(#000000, 0)', () => {
      expect(parse('#000000', 0)).toBe('rgba(0,0,0,0)')
    })

    test('parse(#FFFFFF, 1)', () => {
      expect(parse('#FFFFFF', 1)).toBe('rgba(255,255,255,1)')
    })

    test('parse(#123456, .5)', () => {
      expect(parse('#123456', .5)).toBe('rgba(18,52,86,0.5)')
    })
  })

  describe('CSS color keywords', () => {
    test('parse(black, 0)', () => {
      expect(parse('black', 0)).toBe('rgba(0,0,0,0)')
    })

    test('parse(white, 1)', () => {
      expect(parse('white', 1)).toBe('rgba(255,255,255,1)')
    })

    test('parse(red, .5)', () => {
      expect(parse('red', .5)).toBe('rgba(255,0,0,0.5)')
    })

    test('parse(lime, -1)', () => {
      expect(parse('lime', -1)).toBe('rgba(0,255,0,0)')
    })

    test('parse(blue, 2)', () => {
      expect(parse('blue', 2)).toBe('rgba(0,0,255,1)')
    })
  })
})
