import { parseAsCSSColor as parse } from '..'

describe('arrays', () => {
  describe('parse([number])', () => {
    test('parse([0xFFFFFF])', () => {
      expect(parse([0xFFFFFF])).toBe('#ffffff')
    })

    test('parse([0x000000])', () => {
      expect(parse([0x000000])).toBe('#000000')
    })
  })

  describe('parse([number, number])', () => {
    test('parse([0xFFFFFF, .25])', () => {
      expect(parse([0xFFFFFF, 0.25])).toBe('rgba(255,255,255,0.25)')
    })

    test('parse([0x000000, .5])', () => {
      expect(parse([0x000000, 0.5])).toBe('rgba(0,0,0,0.5)')
    })

    test('parse([0x123456, .75])', () => {
      expect(parse([0x123456, 0.75])).toBe('rgba(18,52,86,0.75)')
    })
  })

  describe('parse([string, number])', () => {
    test('parse([\'0xFFFFFF\', .25])', () => {
      expect(parse(['0xFFFFFF', 0.25])).toBe('rgba(255,255,255,0.25)')
    })

    test('parse([\'0x000000\', .5])', () => {
      expect(parse(['0x000000', 0.5])).toBe('rgba(0,0,0,0.5)')
    })

    test('parse([\'0x123456\', .75])', () => {
      expect(parse(['0x123456', 0.75])).toBe('rgba(18,52,86,0.75)')
    })
  })
})
