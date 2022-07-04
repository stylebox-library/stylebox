import { parse } from '..'

describe('object params', () => {
  describe('1st param - parse({ ... })', () => {
    test('empty object - parse({})', () => {
      const styles = {}

      expect(parse(styles, {})).toBe(false)
      expect(styles).toEqual({})
    })

    describe('of', () => {
      test('parse({ of: 1 })', () => {
        const styles = {}

        expect(parse(styles, { of: 1 })).toBe(true)
        expect(styles).toEqual({
          width:  '1rem',
          height: '1rem',
        })
      })
    })

    describe('width/height', () => {
      test('parse({ width: 1 })', () => {
        const styles = {}

        expect(parse(styles, { width: 1 })).toBe(true)
        expect(styles).toEqual({ width: '1rem' })
      })

      test('parse({ height: 1 })', () => {
        const styles = {}

        expect(parse(styles, { height: 1 })).toBe(true)
        expect(styles).toEqual({ height: '1rem' })
      })
    })

    describe('minWidth/minHeight', () => {
      test('parse({ minWidth: 1 })', () => {
        const styles = {}

        expect(parse(styles, { minWidth: 1 })).toBe(true)
        expect(styles).toEqual({ minWidth: '1rem' })
      })

      test('parse({ minHeight: 1 })', () => {
        const styles = {}

        expect(parse(styles, { minHeight: 1 })).toBe(true)
        expect(styles).toEqual({ minHeight: '1rem' })
      })
    })

    describe('maxWidth/maxHeight', () => {
      test('parse({ maxWidth: 1 })', () => {
        const styles = {}

        expect(parse(styles, { maxWidth: 1 })).toBe(true)
        expect(styles).toEqual({ maxWidth: '1rem' })
      })

      test('parse({ maxHeight: 1 })', () => {
        const styles = {}

        expect(parse(styles, { maxHeight: 1 })).toBe(true)
        expect(styles).toEqual({ maxHeight: '1rem' })
      })
    })
  })

  describe('2nd param - parse(0, { ... })', () => {
    test('empty object - parse(0, {})', () => {
      const styles = {}

      expect(parse(styles, 0, {})).toBe(true)
      expect(styles).toEqual({
        width:  0,
        height: 0,
      })
    })

    describe('width/height', () => {
      test('parse(0, { width: 1 })', () => {
        const styles = {}

        expect(parse(styles, 0, { width: 1 })).toBe(true)
        expect(styles).toEqual({
          width:  '1rem',
          height: 0,
        })
      })

      test('parse(0, { height: 1 })', () => {
        const styles = {}

        expect(parse(styles, 0, { height: 1 })).toBe(true)
        expect(styles).toEqual({
          width:  0,
          height: '1rem',
        })
      })
    })

    describe('minWidth/minHeight', () => {
      test('parse(0, { minWidth: 1 })', () => {
        const styles = {}

        expect(parse(styles, 0, { minWidth: 1 })).toBe(true)
        expect(styles).toEqual({
          width:    0,
          height:   0,
          minWidth: '1rem',
        })
      })

      test('parse(0, { minHeight: 1 })', () => {
        const styles = {}

        expect(parse(styles, 0, { minHeight: 1 })).toBe(true)
        expect(styles).toEqual({
          width:     0,
          height:    0,
          minHeight: '1rem',
        })
      })
    })

    describe('maxWidth/maxHeight', () => {
      test('parse(0, { maxWidth: 1 })', () => {
        const styles = {}

        expect(parse(styles, 0, { maxWidth: 1 })).toBe(true)
        expect(styles).toEqual({
          width:    0,
          height:   0,
          maxWidth: '1rem',
        })
      })

      test('parse(0, { maxHeight: 1 })', () => {
        const styles = {}

        expect(parse(styles, 0, { maxHeight: 1 })).toBe(true)
        expect(styles).toEqual({
          width:     0,
          height:    0,
          maxHeight: '1rem',
        })
      })
    })
  })

  describe('3rd param - parse(0, 1, { ... })', () => {
    test('empty object - parse(0, 1, {})', () => {
      const styles = {}

      expect(parse(styles, 0, 1, {})).toBe(true)
      expect(styles).toEqual({
        width:  0,
        height: '1rem',
      })
    })

    describe('minWidth/minHeight', () => {
      test('parse(0, 1, { minWidth: 1 })', () => {
        const styles = {}

        expect(parse(styles, 0, 1, { minWidth: 1 })).toBe(true)
        expect(styles).toEqual({
          width:    0,
          height:   '1rem',
          minWidth: '1rem',
        })
      })

      test('parse(0, 1, { minHeight: 1 })', () => {
        const styles = {}

        expect(parse(styles, 0, 1, { minHeight: 1 })).toBe(true)
        expect(styles).toEqual({
          width:     0,
          height:    '1rem',
          minHeight: '1rem',
        })
      })
    })

    describe('maxWidth/maxHeight', () => {
      test('parse(0, 1, { maxWidth: 1 })', () => {
        const styles = {}

        expect(parse(styles, 0, 1, { maxWidth: 1 })).toBe(true)
        expect(styles).toEqual({
          width:    0,
          height:   '1rem',
          maxWidth: '1rem',
        })
      })

      test('parse(0, 1, { maxHeight: 1 })', () => {
        const styles = {}

        expect(parse(styles, 0, 1, { maxHeight: 1 })).toBe(true)
        expect(styles).toEqual({
          width:     0,
          height:    '1rem',
          maxHeight: '1rem',
        })
      })
    })
  })
})
