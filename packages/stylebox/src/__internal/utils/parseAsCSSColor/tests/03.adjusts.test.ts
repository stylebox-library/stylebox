import { parseAsCSSColor as parse } from '..'

describe('adjustments', () => {
  describe('darken', () => {
    test('parse(0x000000, { darken: .75 })', () => {
      expect(parse(0x000000, { darken: 0.75 })).toBe('#000000')
    })

    test('parse(0xFFFFFF, { darken: .75 })', () => {
      expect(parse(0xFFFFFF, { darken: 0.75 })).toBe('#404040')
    })

    test('parse(0xFF0000, { darken: .25 })', () => {
      expect(parse(0xFF0000, { darken: 0.25 })).toBe('#800000')
    })

    test('parse(0x00FF00, { darken: .25 })', () => {
      expect(parse(0x00FF00, { darken: 0.25 })).toBe('#008000')
    })

    test('parse(0x0000FF, { darken: .25 })', () => {
      expect(parse(0x0000FF, { darken: 0.25 })).toBe('#000080')
    })

    test('parse(0x123456, { darken: 0 })', () => {
      expect(parse(0x123456, { darken: 0 })).toBe('#123456')
    })

    test('parse(0xFFCD64, { darken: .2 })', () => {
      expect(parse(0xFFCD64, { darken: 0.2 })).toBe('#fdab00')
    })
  })

  describe('lighten', () => {
    test('parse(0x000000, { lighten: .75 })', () => {
      expect(parse(0x000000, { lighten: 0.75 })).toBe('#bfbfbf')
    })

    test('parse(0xFFFFFF, { lighten: .75 })', () => {
      expect(parse(0xFFFFFF, { lighten: 0.75 })).toBe('#ffffff')
    })

    test('parse(0xFF0000, { lighten: .25 })', () => {
      expect(parse(0xFF0000, { lighten: 0.25 })).toBe('#ff8080')
    })

    test('parse(0x00FF00, { lighten: .25 })', () => {
      expect(parse(0x00FF00, { lighten: 0.25 })).toBe('#80ff80')
    })

    test('parse(0x0000FF, { lighten: .25 })', () => {
      expect(parse(0x0000FF, { lighten: 0.25 })).toBe('#8080ff')
    })

    test('parse(0x123456, { lighten: 0 })', () => {
      expect(parse(0x123456, { lighten: 0 })).toBe('#123456')
    })

    test('parse(0xFFCD64, { lighten: .2 })', () => {
      expect(parse(0xFFCD64, { lighten: 0.2 })).toBe('#ffeeca')
    })
  })
})
